import { MockBaseAbstract } from "../../mock.base.abstract";
import { FormPasswordOrm } from "../../../../domain/model/sql/postgre/form/password/form.password.orm";
import { faker } from "@faker-js/faker";
import { Injectable } from "@nestjs/common";
@Injectable()
export class FormPasswordMockGenerator extends MockBaseAbstract<FormPasswordOrm> {
  override _construct(): void {
    this.entity.Password = faker.string.uuid();
  }
}
