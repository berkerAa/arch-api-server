import { FormEmailOrm } from "../../../../domain/model/sql/postgre/form/email/form.email.orm";
import { Injectable } from "@nestjs/common";
import { MockBaseAbstract } from "../../mock.base.abstract";
import { faker } from "@faker-js/faker";
import { ConfirmationEmailCodeMockGenerator } from "../../confirmation/emailCode/confirmation.email.code.mock.generator";
import { ConfirmationEmailCodeOrm } from "../../../../domain/model/sql/postgre/confirmation/emailCode/confirmation.email.code.orm";
import { ReverseConfirmationStateEnum } from "../../../../../../contract/enum/reverse/reverse.confirmation.state.enum";

@Injectable()
export class FormEmailMockGenerator extends MockBaseAbstract<FormEmailOrm> {
  override config: FormEmailMockGeneratorConfig = {
    confirmationHistoryGenerator: {
      count: 1,
      generatorEntity: {
        ConfirmationStateId: ReverseConfirmationStateEnum.succeed,
      },
    },
  };
  constructor(
    private confirmationHistoryGenerator: ConfirmationEmailCodeMockGenerator,
  ) {
    super();
    confirmationHistoryGenerator.configureEntity =
      this.config.confirmationHistoryGenerator.generatorEntity;
  }
  override _construct(): void {
    this.entity.confirmationEmailEntry = Array(
      this.config.confirmationHistoryGenerator.count,
    )
      .fill(null)
      .map(
        () =>
          this.confirmationHistoryGenerator.get() as ConfirmationEmailCodeOrm,
      );
    const email = faker.internet.email();
    this.entity.DomainPart = email.split("@")[1];
    this.entity.LocalPart = email.split("@")[0];
  }
  _confirmationHistoryGenerator(
    count: number,
    generatorEntity: Partial<ConfirmationEmailCodeOrm>,
  ): boolean {
    this.config.confirmationHistoryGenerator.count = count;
    this.confirmationHistoryGenerator.configureEntity = generatorEntity;
    return true;
  }
}

export type FormEmailMockGeneratorConfig = {
  confirmationHistoryGenerator: {
    count: number;
    generatorEntity: Partial<ConfirmationEmailCodeOrm>;
  };
};
