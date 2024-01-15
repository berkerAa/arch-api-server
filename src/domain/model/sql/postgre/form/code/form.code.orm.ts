import { FormSqlBaseOrm } from "../form.sql.base.orm";
import { FormCodeSqlEntityProtocol } from "../../../../../../../../contract/protocol/domain/sql/postgre/form/code/form.code.sql.entity.protocol";
import { Column, Entity, OneToMany } from "typeorm";
import { ConfirmationEmailCodeOrm } from "../../confirmation/emailCode/confirmation.email.code.orm";

@Entity({
  name: "FormCode",
})
export class FormCodeOrm
  extends FormSqlBaseOrm
  implements FormCodeSqlEntityProtocol
{
  @Column({
    type: "int",
  })
  Code: number;
  @OneToMany(
    () => ConfirmationEmailCodeOrm,
    (confirmationEmailCodeOrm) => confirmationEmailCodeOrm.code,
    {
      cascade: ["insert", "update"],
    },
  )
  confirmationEmailEntry: Array<ConfirmationEmailCodeOrm>;
}
