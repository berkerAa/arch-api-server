import { FormEmailOrm } from "../../../../domain/model/sql/postgre/form/email/form.email.orm";
import { Injectable } from "@nestjs/common";
import { MockBaseAbstract } from "../../mock.base.abstract";
import { faker } from "@faker-js/faker";

@Injectable()
export class FormEmailMockGenerator extends MockBaseAbstract<FormEmailOrm> {
  override _construct(): void {
    const email = faker.internet.email();
    this.entity.DomainPart = email.split("@")[1];
    this.entity.LocalPart = email.split("@")[0];
  }
}
