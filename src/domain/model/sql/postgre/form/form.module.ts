import { Module } from "@nestjs/common";
import { formProvider } from "./form.provider";
import { DB_SOURCE } from "../../../../../../../contract/enum/system/db.source.enum";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature(formProvider, DB_SOURCE.POSTGRE_SQL)],
  exports: [TypeOrmModule],
})
export class FormModule {}
