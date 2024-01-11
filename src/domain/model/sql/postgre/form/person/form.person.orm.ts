import { FormSqlBaseOrm } from "../form.sql.base.orm";
import { FormPersonSqlEntityProtocol } from "../../../../../../../../contract/protocol/domain/sql/postgre/form/person/form.person.sql.entity.protocol";
import { Column, Entity } from "typeorm";
@Entity({
  name: "FormPerson",
})
export class FormPersonOrm
  extends FormSqlBaseOrm
  implements FormPersonSqlEntityProtocol
{
  @Column({
    type: "varchar",
    length: 255,
    nullable: false,
  })
  Name: string;
}
