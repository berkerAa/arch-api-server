import { PostgreSqlBaseOrm } from "../postgre.sql.base.orm";
import { ReverseEnumSqlBaseEntityProtocol } from "../../../../../../../contract/protocol/domain/sql/postgre/reverse/reverse.enum.sql.base.entity.protocol";
import { Column, JoinColumn, OneToOne } from "typeorm";
import { ResourceEnumOrm } from "../resource/enum/resource.enum.orm";

export class ReverseEnumBaseOrm
  extends PostgreSqlBaseOrm
  implements ReverseEnumSqlBaseEntityProtocol
{
  @Column()
  EnumId: number;
  @JoinColumn({ name: "EnumId" })
  @OneToOne(() => ResourceEnumOrm, (resourceEnumOrm) => resourceEnumOrm.Id)
  enumValue: ResourceEnumOrm;
}
