import {
  ObjectLiteral,
  QueryRunner,
  Repository,
  SelectQueryBuilder,
} from "typeorm";
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
  createQueryBuilder(alias: string): SelectQueryBuilder<Entity> {
    return this.repository.createQueryBuilder(alias);
  }
  getQueryRunner(): QueryRunner | undefined {
    return this.repository.manager.connection.createQueryRunner();
  }
}
