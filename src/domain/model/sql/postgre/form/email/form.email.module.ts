import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DB_SOURCE } from "../../../../../../../../contract/enum/system/db.source.enum";
import { FormEmailOrm } from "./form.email.orm";

@Module({
  imports: [TypeOrmModule.forFeature([FormEmailOrm], DB_SOURCE.POSTGRE_SQL)],
  exports: [TypeOrmModule],
})
export class FormEmailModule {}
