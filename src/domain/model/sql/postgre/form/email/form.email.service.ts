import { Injectable } from "@nestjs/common";
import { PostgreSqlBaseService } from "../../postgre.sql.base.service";
import { FormEmailOrm } from "./form.email.orm";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { DB_SOURCE } from "../../../../../../../../contract/enum/system/db.source.enum";

@Injectable()
export class FormEmailService extends PostgreSqlBaseService<FormEmailOrm> {
  constructor(
    @InjectRepository(FormEmailOrm, DB_SOURCE.POSTGRE_SQL)
    protected readonly repository: Repository<FormEmailOrm>,
  ) {
    super(repository);
  }
}
