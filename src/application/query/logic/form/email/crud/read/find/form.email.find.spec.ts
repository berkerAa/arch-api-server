import { TestEnvFactory } from "../../../../../../../../utility/test/test.env.factory";
import { FormEmailOrm } from "../../../../../../../../domain/model/sql/postgre/form/email/form.email.orm";
import { FormEmailMockGenerator } from "../../../../../../../mock/form/email/form.email.mock.generator";
import { FormEmailService } from "../../../../../../../../domain/model/sql/postgre/form/email/form.email.service";
import { FormEmailFindQuery } from "./form.email.find.query";
import { FormEmailFindModule } from "./form.email.find.module";
import { FormEmailMockModule } from "../../../../../../../mock/form/email/form.email.mock.module";

describe("Find Email Query Spec", () => {
  let testFactory: TestEnvFactory<
    FormEmailOrm,
    FormEmailMockGenerator,
    FormEmailService,
    FormEmailFindQuery
  >;
  beforeAll(async () => {
    testFactory = await TestEnvFactory.createModule(
      [FormEmailFindModule, FormEmailMockModule],
      FormEmailFindQuery,
      FormEmailMockGenerator,
    );
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
