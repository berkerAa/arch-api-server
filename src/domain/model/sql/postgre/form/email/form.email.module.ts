import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DB_SOURCE } from "../../../../../../../../contract/enum/system/db.source.enum";
import { FormEmailOrm } from "./form.email.orm";
import { FormEmailService } from "./form.email.service";

@Module({
  imports: [TypeOrmModule.forFeature([FormEmailOrm], DB_SOURCE.POSTGRE_SQL)],
  providers: [FormEmailService],
  exports: [FormEmailService],
})
export class FormEmailModule {}
