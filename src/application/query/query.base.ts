import { QueryProtocol } from "../../../../contract/protocol/application/query/query.protocol";
import { PostgreSqlBaseService } from "../../domain/model/sql/postgre/postgre.sql.base.service";
import { ObjectLiteral } from "typeorm";

export abstract class QueryBase<
  Entity extends ObjectLiteral,
  ServiceType extends PostgreSqlBaseService<Entity>,
> implements QueryProtocol
{
  getService(): ServiceType {
    throw new Error("Method not implemented.");
  }
}
