import { Module } from "@nestjs/common";
import { FormEmailFindQuery } from "./form.email.find.query";
import { FormEmailServiceModule } from "../../../../../../../../domain/model/sql/postgre/form/email/form.email.service.module";

@Module({
  imports: [FormEmailServiceModule],
  providers: [FormEmailFindQuery],
  exports: [FormEmailFindQuery],
})
export class FormEmailFindModule {}
