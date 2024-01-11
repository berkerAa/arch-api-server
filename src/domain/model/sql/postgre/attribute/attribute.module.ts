import { DB_SOURCE } from "../../../../../../../contract/enum/system/db.source.enum";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { attributeProvider } from "./attribute.provider";

@Module({
  imports: [TypeOrmModule.forFeature(attributeProvider, DB_SOURCE.POSTGRE_SQL)],
  exports: [TypeOrmModule],
})
export class AttributeModule {}
