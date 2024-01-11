import { PostgreSqlBaseOrm } from "../postgre.sql.base.orm";
import { AttributeBaseEntityProtocol } from "../../../../../../../contract/protocol/domain/sql/postgre/attribute/attribute.base.entity.protocol";
import { Column, JoinColumn, ManyToOne } from "typeorm";
import { ReverseEnumAttributeStateOrm } from "../reverse/attributeState/reverse.enum.attribute.state.orm";

export class AttributeBaseOrm
  extends PostgreSqlBaseOrm
  implements AttributeBaseEntityProtocol
{
  @Column({
    type: "int",
  })
  AttributeStateId: number;
  @JoinColumn({
    name: "AttributeStateId",
  })
  @ManyToOne(
    () => ReverseEnumAttributeStateOrm,
    (reverseEnumAttributeStateOrm) => reverseEnumAttributeStateOrm.Id,
  )
  attributeState: ReverseEnumAttributeStateOrm;
}
