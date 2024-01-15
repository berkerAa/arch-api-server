import { Injectable } from "@nestjs/common";
import { PostgreSqlBaseService } from "../../postgre.sql.base.service";
import { FormCodeOrm } from "./form.code.orm";
import { Repository, SelectQueryBuilder } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { DB_SOURCE } from "../../../../../../../../contract/enum/system/db.source.enum";

@Injectable()
export class FormCodeService extends PostgreSqlBaseService<FormCodeOrm> {
  constructor(
    @InjectRepository(FormCodeOrm, DB_SOURCE.POSTGRE_SQL)
    protected repository: Repository<FormCodeOrm>,
  ) {
    super(repository);
  }
  override createQueryBuilder(alias = "fc"): SelectQueryBuilder<FormCodeOrm> {
    return super.createQueryBuilder(alias);
  }
}
