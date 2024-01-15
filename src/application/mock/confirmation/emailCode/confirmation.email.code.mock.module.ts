import { Module } from "@nestjs/common";
import { FormCodeMockModule } from "../../form/code/form.code.mock.module";
import { ConfirmationEmailCodeMockGenerator } from "./confirmation.email.code.mock.generator";

@Module({
  imports: [FormCodeMockModule],
  providers: [ConfirmationEmailCodeMockGenerator],
  exports: [ConfirmationEmailCodeMockGenerator],
})
export class ConfirmationEmailCodeMockModule {}
