import { forwardRef, Module } from "@nestjs/common";
import { FormEmailService } from "./form.email.service";
import { FormEmailModule } from "./form.email.module";
import PostgreSqlDatabaseModule from "../../postgre.sql.database.module";

@Module({
  imports: [PostgreSqlDatabaseModule, forwardRef(() => FormEmailModule)],
  providers: [FormEmailService],
  exports: [FormEmailService],
})
export class FormEmailServiceModule {}
