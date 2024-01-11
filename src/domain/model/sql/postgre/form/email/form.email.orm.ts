import { FormSqlBaseOrm } from "../form.sql.base.orm";
import { Column, Entity, OneToMany } from "typeorm";
import { FormEmailSqlEntityProtocol } from "../../../../../../../../contract/protocol/domain/sql/postgre/form/email/form.email.sql.entity.protocol";
import { ConfirmationEmailCodeOrm } from "../../confirmation/emailCode/confirmation.email.code.orm";

@Entity({
  name: "FormEmail",
})
export class FormEmailOrm
  extends FormSqlBaseOrm
  implements FormEmailSqlEntityProtocol
{
  @Column({
    type: "varchar",
    length: 255,
    nullable: false,
  })
  DomainPart: string;
  @Column({
    type: "varchar",
    length: 255,
    nullable: false,
  })
  LocalPart: string;
  @OneToMany(
    () => ConfirmationEmailCodeOrm,
    (confirmationEmailCodeOrm) => confirmationEmailCodeOrm.email,
    {
      cascade: ["insert", "update"],
    },
  )
  confirmationEmailEntry: Array<ConfirmationEmailCodeOrm>;
}
