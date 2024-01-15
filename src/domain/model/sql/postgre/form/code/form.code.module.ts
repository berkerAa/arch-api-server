import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DB_SOURCE } from "../../../../../../../../contract/enum/system/db.source.enum";
import { FormCodeOrm } from "./form.code.orm";

@Module({
  imports: [TypeOrmModule.forFeature([FormCodeOrm], DB_SOURCE.POSTGRE_SQL)],
  exports: [TypeOrmModule],
})
export class FormCodeModule {}
