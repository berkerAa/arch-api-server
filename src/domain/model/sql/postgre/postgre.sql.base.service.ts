import { ObjectLiteral, Repository } from "typeorm";
import { PostgreSqlBaseServiceProtocol } from "../../../../../../contract/protocol/domain/sql/postgre/postgre.sql.base.service.protocol";

export class PostgreSqlBaseService<Entity extends ObjectLiteral>
  implements PostgreSqlBaseServiceProtocol
{
  constructor(protected repository: Repository<Entity>) {}
  getRepository(): Repository<Entity> {
    return this.repository;
  }

  setRepository(repository: Repository<Entity>): void {
    this.repository = repository;
  }
}
