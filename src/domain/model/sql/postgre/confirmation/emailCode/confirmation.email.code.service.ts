import { PostgreSqlBaseService } from "../../postgre.sql.base.service";
import { ConfirmationEmailCodeOrm } from "./confirmation.email.code.orm";
import { Repository, SelectQueryBuilder } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { DB_SOURCE } from "../../../../../../../../contract/enum/system/db.source.enum";

export class ConfirmationEmailCodeService extends PostgreSqlBaseService<ConfirmationEmailCodeOrm> {
  constructor(
    @InjectRepository(ConfirmationEmailCodeOrm, DB_SOURCE.POSTGRE_SQL)
    protected repository: Repository<ConfirmationEmailCodeOrm>,
  ) {
    super(repository);
  }
  override createQueryBuilder(
    alias = "cec",
  ): SelectQueryBuilder<ConfirmationEmailCodeOrm> {
    return super.createQueryBuilder(alias);
  }
}
