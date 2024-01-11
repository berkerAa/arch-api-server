import { Module } from "@nestjs/common";
import { FormPasswordMockGenerator } from "./form.password.mock.generator";

@Module({
  providers: [FormPasswordMockGenerator],
  exports: [FormPasswordMockGenerator],
})
export class FormPasswordMockModule {}
