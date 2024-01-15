import { TestEnvFactoryProtocol } from "../../../../contract/protocol/utility/test/test.env.factory.protocol";
import { ObjectLiteral, QueryRunner } from "typeorm";
import { Injectable } from "@nestjs/common";
import { QueryBase } from "../../application/query/query.base";
import { PostgreSqlBaseService } from "../../domain/model/sql/postgre/postgre.sql.base.service";
import { MockBaseAbstract } from "../../application/mock/mock.base.abstract";

@Injectable()
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
  public generatedEntity: TargetParentEntityType;
  public generator: MockGeneratorType;
  public queryInstance: QueryRunner;
  public testObject: TargetTestObjectType;
  constructor() {}
  connectDependencies2Transition(
    testObjectDependencyList: Array<ObjectLiteral>,
  ): void {
    testObjectDependencyList.forEach((dep) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
      const service = dep.getService();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
      const repository = service.getRepository();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
      service.setRepository(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-argument
        this.queryInstance.manager.getRepository(repository.target),
      );
    });
  }
  async closeResult(): Promise<void> {
    return this.queryInstance
      .rollbackTransaction()
      .then(() => this.queryInstance.release());
  }
}
