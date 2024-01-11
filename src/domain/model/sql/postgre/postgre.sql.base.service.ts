import { ObjectLiteral, Repository } from "typeorm";

export class PostgreSqlBaseService<Entity extends ObjectLiteral> {
  constructor(protected readonly repository: Repository<Entity>) {}
  getRepository(): Repository<Entity> {
    return this.repository;
  }
}
