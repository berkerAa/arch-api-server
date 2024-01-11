import { ReverseEnumBaseOrm } from "../reverse.enum.base.orm";
import { ReverseEnumSqlAttributeStateEntityProtocol } from "../../../../../../../../contract/protocol/domain/sql/postgre/reverse/attributeState/reverse.enum.sql.attribute.state.entity.protocol";
import { Entity } from "typeorm";
@Entity({
  name: "ReverseEnumAttributeState",
})
export class ReverseEnumAttributeStateOrm
  extends ReverseEnumBaseOrm
  implements ReverseEnumSqlAttributeStateEntityProtocol {}
