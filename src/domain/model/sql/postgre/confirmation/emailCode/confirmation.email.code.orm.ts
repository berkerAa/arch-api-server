import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { ConfirmationBaseOrm } from "../confirmation.base.orm";
import { ConfirmationEmailCodeSqlEntityProtocol } from "../../../../../../../../contract/protocol/domain/sql/postgre/confirmation/emailCode/confirmation.email.code.sql.entity.protocol";
import { FormCodeOrm } from "../../form/code/form.code.orm";
import { FormEmailOrm } from "../../form/email/form.email.orm";

@Entity({
  name: "ConfirmationEmailCode",
})
export class ConfirmationEmailCodeOrm
  extends ConfirmationBaseOrm
  implements ConfirmationEmailCodeSqlEntityProtocol
{
  @Column({
    type: "int",
  })
  CodeId: number;
  @Column({
    type: "int",
  })
  EmailId: number;
  @JoinColumn({ name: "CodeId" })
  @ManyToOne(() => FormCodeOrm, (formCodeOrm) => formCodeOrm.Id)
  code: FormCodeOrm;
  @JoinColumn({ name: "EmailId" })
  @ManyToOne(() => FormEmailOrm, (formEmailOrm) => formEmailOrm.Id)
  email: FormEmailOrm;
}
