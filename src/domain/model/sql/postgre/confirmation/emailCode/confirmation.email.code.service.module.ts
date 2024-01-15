import { forwardRef, Module } from "@nestjs/common";
import PostgreSqlDatabaseModule from "../../postgre.sql.database.module";
import { ConfirmationEmailCodeModule } from "./confirmation.email.code.module";
import { ConfirmationEmailCodeService } from "./confirmation.email.code.service";

@Module({
  imports: [
    PostgreSqlDatabaseModule,
    forwardRef(() => ConfirmationEmailCodeModule),
  ],
  providers: [ConfirmationEmailCodeService],
  exports: [ConfirmationEmailCodeService],
})
export class ConfirmationEmailCodeServiceModule {}
