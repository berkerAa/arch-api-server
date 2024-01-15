import { TestEnvFactoryProtocol } from "../../../../contract/protocol/utility/test/test.env.factory.protocol";
import { ObjectLiteral, QueryRunner } from "typeorm";
import { Injectable, Type } from "@nestjs/common";
import { QueryBase } from "../../application/query/query.base";
import { PostgreSqlBaseService } from "../../domain/model/sql/postgre/postgre.sql.base.service";
import { MockBaseAbstract } from "../../application/mock/mock.base.abstract";
import { Test } from "@nestjs/testing";
import { DynamicModule } from "@nestjs/common/interfaces/modules/dynamic-module.interface";
import { ForwardReference } from "@nestjs/common/interfaces/modules/forward-reference.interface";

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

  static async createModule<
    TargetParentEntityType extends ObjectLiteral,
    MockGeneratorType extends MockBaseAbstract<TargetParentEntityType>,
    TargetServiceDependencyType extends
      PostgreSqlBaseService<TargetParentEntityType>,
    TargetTestObjectType extends QueryBase<
      TargetParentEntityType,
      TargetServiceDependencyType
    >,
  >(
    imports: Array<
      Type<unknown> | DynamicModule | Promise<DynamicModule> | ForwardReference
    >,
    testObjectType: Type<TargetTestObjectType>,
    mockGeneratorType: Type<MockGeneratorType>,
  ): Promise<
    TestEnvFactory<
      TargetParentEntityType,
      MockGeneratorType,
      TargetServiceDependencyType,
      TargetTestObjectType
    >
  > {
    const moduleCompile = await Test.createTestingModule({
      imports: imports,
      providers: [TestEnvFactory],
    })
      .compile()
      .then((module) => ({
        factory:
          module.resolve<
            TestEnvFactory<
              TargetParentEntityType,
              MockGeneratorType,
              TargetServiceDependencyType,
              TargetTestObjectType
            >
          >(TestEnvFactory),
        testObject: module.resolve(testObjectType),
        generator: module.resolve(mockGeneratorType),
      }));
    const testFactory = await moduleCompile.factory;
    testFactory.generator = await moduleCompile.generator;
    testFactory.testObject = await moduleCompile.testObject;
    testFactory.queryInstance = testFactory.testObject
      .getService()
      .getQueryRunner() as QueryRunner;
    await testFactory.queryInstance
      .connect()
      .then(() => testFactory.queryInstance.startTransaction());
    testFactory.connectDependencies2Transition([testFactory.testObject]);
    return testFactory;
  }
}
