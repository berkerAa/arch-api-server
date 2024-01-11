import { FormSqlBaseOrm } from "../form.sql.base.orm";
import { FormPasswordSqlEntityProtocol } from "../../../../../../../../contract/protocol/domain/sql/postgre/form/password/form.password.sql.entity.protocol";
import { Column, Entity, OneToMany } from "typeorm";
import { AttributeUserOrm } from "../../attribute/user/attribute.user.orm";

@Entity({
  name: "FormPassword",
})
export class FormPasswordOrm
  extends FormSqlBaseOrm
  implements FormPasswordSqlEntityProtocol
{
  @Column({
    type: "varchar",
    length: 255,
    nullable: false,
  })
  Password: string;
  @OneToMany(() => AttributeUserOrm, (attributeUser) => attributeUser.email, {
    cascade: ["insert", "update"],
  })
  userAttributeEntity: Array<AttributeUserOrm>;
}
