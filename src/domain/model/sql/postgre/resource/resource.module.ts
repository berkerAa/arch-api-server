import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DB_SOURCE } from "../../../../../../../contract/enum/system/db.source.enum";
import { resourceProvider } from "./resource.provider";

@Module({
  imports: [TypeOrmModule.forFeature(resourceProvider, DB_SOURCE.POSTGRE_SQL)],
  exports: [TypeOrmModule],
})
export class ResourceModule {}
