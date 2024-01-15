import { Module } from "@nestjs/common";
import { FormCodeMockGenerator } from "./form.code.mock.generator";

@Module({
  providers: [FormCodeMockGenerator],
  exports: [FormCodeMockGenerator],
})
export class FormCodeMockModule {}
