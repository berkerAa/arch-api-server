import { QueryProtocol } from "../../../../contract/protocol/application/query/query.protocol";
import { PostgreSqlBaseService } from "../../domain/model/sql/postgre/postgre.sql.base.service";
import { ObjectLiteral } from "typeorm";

export abstract class QueryBase<
  Entity extends ObjectLiteral,
  ServiceType extends PostgreSqlBaseService<Entity>,
> implements QueryProtocol
{
  protected constructor(protected service: ServiceType) {}
  getService(): ServiceType {
    return this.service;
  }
}
