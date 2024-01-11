import { Module } from "@nestjs/common";
import { FormEmailMockGenerator } from "./form.email.mock.generator";

@Module({
  providers: [FormEmailMockGenerator],
  exports: [FormEmailMockGenerator],
})
export class FormEmailMockModule {}
