import { ResourceBaseOrm } from "../resource.base.orm";
import { ResourceEnumSqlEntityProtocol } from "../../../../../../../../contract/protocol/domain/sql/postgre/resource/enum/resource.enum.sql.entity.protocol";
import { Column, Entity } from "typeorm";

@Entity({
  name: "ResourceEnum",
})
export class ResourceEnumOrm
  extends ResourceBaseOrm
  implements ResourceEnumSqlEntityProtocol
{
  @Column({ type: "varchar", length: 100 })
  EnumValue: string;
}
