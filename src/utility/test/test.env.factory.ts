import { TestEnvFactoryProtocol } from "../../../../contract/protocol/utility/test/test.env.factory.protocol";
import { EntityTarget, ObjectLiteral, QueryRunner } from "typeorm";
import { Inject } from "@nestjs/common";
import { QueryBase } from "../../application/query/query.base";
import { PostgreSqlBaseService } from "../../domain/model/sql/postgre/postgre.sql.base.service";
import { MockBaseAbstract } from "../../application/mock/mock.base.abstract";
import { QueryProtocol } from "../../../../contract/protocol/application/query/query.protocol";
import { PostgreSqlBaseServiceProtocol } from "../../../../contract/protocol/domain/sql/postgre/postgre.sql.base.service.protocol";

export class TestEnvFactory<
  TargetParentEntityType extends ObjectLiteral,
  MockGeneratorType extends MockBaseAbstract<TargetParentEntityType>,
  TargetServiceDependencyType extends
    PostgreSqlBaseService<TargetParentEntityType>,
  TargetTestObjectType extends QueryBase<
    TargetParentEntityType,
    TargetServiceDependencyType
  >,
> implements
    TestEnvFactoryProtocol<
      MockGeneratorType,
      TargetTestObjectType,
      TargetParentEntityType,
      QueryRunner
    >
{
  public readonly generatedEntity: TargetParentEntityType;
  public readonly generator: MockGeneratorType;
  public readonly queryInstance: QueryRunner;
  public readonly testObject: TargetTestObjectType;
  constructor(
    @Inject() private _generator: MockGeneratorType,
    @Inject() private _testObject: TargetTestObjectType,
    @Inject() private _queryInstance: QueryRunner,
  ) {
    this.generator = this._generator;
    this.testObject = this._testObject;
    this.queryInstance = this._queryInstance;
  }
  connectDependencies2Transition(
    testObjectDependencyList: Array<ObjectLiteral>,
  ): void {
    testObjectDependencyList.forEach((dep) => {
      const service: PostgreSqlBaseServiceProtocol =
        dep.getService() as PostgreSqlBaseServiceProtocol;
      service.setRepository(
        this.queryInstance.manager.getRepository(
          this
            .generatedEntity as unknown as EntityTarget<TargetParentEntityType>,
        ),
      );
    });
  }
}
