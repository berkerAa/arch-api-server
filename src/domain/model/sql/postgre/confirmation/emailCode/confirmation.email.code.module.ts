import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DB_SOURCE } from "../../../../../../../../contract/enum/system/db.source.enum";
import { ConfirmationEmailCodeOrm } from "./confirmation.email.code.orm";

@Module({
  imports: [
    TypeOrmModule.forFeature([ConfirmationEmailCodeOrm], DB_SOURCE.POSTGRE_SQL),
  ],
  exports: [TypeOrmModule],
})
export class ConfirmationEmailCodeModule {}
