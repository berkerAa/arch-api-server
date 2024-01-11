import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AttributeBaseOrm } from "../attribute.base.orm";
import { AttributeUserSqlEntityProtocol } from "../../../../../../../../contract/protocol/domain/sql/postgre/attribute/user/attribute.user.sql.entity.protocol";
import { FormEmailOrm } from "../../form/email/form.email.orm";
import { FormPasswordOrm } from "../../form/password/form.password.orm";
import { FormPersonOrm } from "../../form/person/form.person.orm";
import { FormPhoneOrm } from "../../form/phone/form.phone.orm";

@Entity({
  name: "AttributeUser",
})
export class AttributeUserOrm
  extends AttributeBaseOrm
  implements AttributeUserSqlEntityProtocol
{
  @Column({
    type: "int",
  })
  EmailId: number;
  @Column({
    type: "int",
  })
  PasswordId: number;
  @Column({
    type: "int",
  })
  PersonId: number;
  @Column({
    type: "int",
  })
  PhoneId: number;
  @JoinColumn({ name: "EmailId" })
  @ManyToOne(() => FormEmailOrm, (email) => email.Id)
  email: FormEmailOrm;
  @JoinColumn({ name: "PasswordId" })
  @ManyToOne(() => FormPasswordOrm, (password) => password.Id)
  password: FormPasswordOrm;
  @JoinColumn({ name: "PersonId" })
  @ManyToOne(() => FormPersonOrm, (person) => person.Id)
  person: FormPersonOrm;
  @JoinColumn({ name: "PhoneId" })
  @ManyToOne(() => FormPhoneOrm, (phone) => phone.Id)
  phone: FormPhoneOrm;
}
