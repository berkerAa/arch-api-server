import { TestEnvFactory } from "../../../../../../../../utility/test/test.env.factory";
import { FormEmailOrm } from "../../../../../../../../domain/model/sql/postgre/form/email/form.email.orm";
import { FormEmailMockGenerator } from "../../../../../../../mock/form/email/form.email.mock.generator";
import { FormEmailService } from "../../../../../../../../domain/model/sql/postgre/form/email/form.email.service";
import { FormEmailFindQuery } from "./form.email.find.query";
import { Test } from "@nestjs/testing";
import { FormEmailMockModule } from "../../../../../../../mock/form/email/form.email.mock.module";
import { FormEmailFindModule } from "./form.email.find.module";
import { QueryRunner } from "typeorm";
import { FormEmailModule } from "../../../../../../../../domain/model/sql/postgre/form/email/form.email.module";

describe("Find Email Query Spec", () => {
  let testFactory: TestEnvFactory<
    FormEmailOrm,
    FormEmailMockGenerator,
    FormEmailService,
    FormEmailFindQuery
  >;
  beforeAll(async () => {
    const moduleCompile = await Test.createTestingModule({
      imports: [FormEmailModule, FormEmailFindModule, FormEmailMockModule],
      providers: [TestEnvFactory],
    })
      .compile()
      .then((module) => ({
        factory:
          module.resolve<
            TestEnvFactory<
              FormEmailOrm,
              FormEmailMockGenerator,
              FormEmailService,
              FormEmailFindQuery
            >
          >(TestEnvFactory),
        testObject: module.resolve(FormEmailFindQuery),
        generator: module.resolve(FormEmailMockGenerator),
      }));
    testFactory = await moduleCompile.factory;
    testFactory.generator = await moduleCompile.generator;
    testFactory.testObject = await moduleCompile.testObject;
    testFactory.queryInstance = testFactory.testObject
      .getService()
      .getQueryRunner() as QueryRunner;
    await testFactory.queryInstance
      .connect()
      .then(() => testFactory.queryInstance.startTransaction());
    testFactory.connectDependencies2Transition([testFactory.testObject]);
    testFactory.generatedEntity = await testFactory.queryInstance.manager.save(
      FormEmailOrm,
      testFactory.generator.get(),
    );
  }, 50000);
  describe("findEmailByFormId, unit test", () => {
    it("success with valid email", async () => {
      const inputDto = {
        id: testFactory.generatedEntity.Id,
      };
      return testFactory.testObject.findEmailByFormId(inputDto).then((result) =>
        expect(result).toEqual({
          localPart: testFactory.generatedEntity.LocalPart,
          domainPart: testFactory.generatedEntity.DomainPart,
        }),
      );
    });
  });

  afterAll(async () => testFactory.closeResult());
});
