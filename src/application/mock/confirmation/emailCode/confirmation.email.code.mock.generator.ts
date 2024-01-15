import { MockBaseAbstract } from "../../mock.base.abstract";
import { ConfirmationEmailCodeOrm } from "../../../../domain/model/sql/postgre/confirmation/emailCode/confirmation.email.code.orm";
import { FormCodeMockGenerator } from "../../form/code/form.code.mock.generator";
import { FormCodeOrm } from "../../../../domain/model/sql/postgre/form/code/form.code.orm";
import { faker } from "@faker-js/faker";
import { ReverseConfirmationStateEnum } from "../../../../../../contract/enum/reverse/reverse.confirmation.state.enum";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ConfirmationEmailCodeMockGenerator extends MockBaseAbstract<ConfirmationEmailCodeOrm> {
  constructor(private codeGenerator: FormCodeMockGenerator) {
    super();
  }
  override _construct(): void {
    this.entity.code = this.codeGenerator.get() as FormCodeOrm;
    this.entity.ConfirmationStateId = faker.helpers.enumValue(
      ReverseConfirmationStateEnum,
    );
    this.entity.ExpirationDate = faker.date.future();
  }
  getGenerators(): {
    codeGenerator: FormCodeMockGenerator;
  } {
    return {
      codeGenerator: this.codeGenerator,
    };
  }
}
