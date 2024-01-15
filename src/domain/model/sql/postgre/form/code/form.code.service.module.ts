import { forwardRef, Module } from "@nestjs/common";
import PostgreSqlDatabaseModule from "../../postgre.sql.database.module";
import { FormCodeModule } from "./form.code.module";
import { FormCodeService } from "./form.code.service";

@Module({
  imports: [PostgreSqlDatabaseModule, forwardRef(() => FormCodeModule)],
  providers: [FormCodeService],
  exports: [FormCodeService],
})
export class FormCodeServiceModule {}
