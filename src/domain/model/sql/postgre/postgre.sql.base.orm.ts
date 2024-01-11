import { PostgreSqlBaseEntityProtocol } from "../../../../../../contract/protocol/domain/sql/postgre/postgre.sql.base.entity.protocol";
import { PrimaryGeneratedColumn } from "typeorm";

export class PostgreSqlBaseOrm implements PostgreSqlBaseEntityProtocol {
  @PrimaryGeneratedColumn()
  Id: number;
}
