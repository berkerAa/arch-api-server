import { Injectable } from "@nestjs/common";
import { MockBaseAbstract } from "../../mock.base.abstract";
import { FormCodeOrm } from "../../../../domain/model/sql/postgre/form/code/form.code.orm";
import { faker } from "@faker-js/faker";

@Injectable()
export class FormCodeMockGenerator extends MockBaseAbstract<FormCodeOrm> {
  override _construct(): void {
    this.entity.Code = faker.number.int({
      min: 100000,
      max: 999999,
    });
  }
}
