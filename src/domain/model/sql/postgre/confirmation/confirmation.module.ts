import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { confirmationProvider } from "./confirmation.provider";
import { DB_SOURCE } from "../../../../../../../contract/enum/system/db.source.enum";

@Module({
  imports: [
    TypeOrmModule.forFeature(confirmationProvider, DB_SOURCE.POSTGRE_SQL),
  ],
  exports: [TypeOrmModule],
})
export class ConfirmationModule {}
