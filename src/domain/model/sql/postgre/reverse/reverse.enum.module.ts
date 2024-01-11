import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DB_SOURCE } from "../../../../../../../contract/enum/system/db.source.enum";
import { reverseEnumProvider } from "./reverse.enum.provider";

@Module({
  imports: [
    TypeOrmModule.forFeature(reverseEnumProvider, DB_SOURCE.POSTGRE_SQL),
  ],
  exports: [TypeOrmModule],
})
export class ReverseEnumModule {}
