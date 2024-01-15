import { Module } from "@nestjs/common";
import { FormEmailMockGenerator } from "./form.email.mock.generator";
import { ConfirmationEmailCodeMockModule } from "../../confirmation/emailCode/confirmation.email.code.mock.module";

@Module({
  imports: [ConfirmationEmailCodeMockModule],
  providers: [FormEmailMockGenerator],
  exports: [FormEmailMockGenerator],
})
export class FormEmailMockModule {}
