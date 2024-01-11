import { FormSqlBaseOrm } from "../form.sql.base.orm";
import { FormPasswordSqlEntityProtocol } from "../../../../../../../../contract/protocol/domain/sql/postgre/form/password/form.password.sql.entity.protocol";
import { Column, Entity } from "typeorm";

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
}
