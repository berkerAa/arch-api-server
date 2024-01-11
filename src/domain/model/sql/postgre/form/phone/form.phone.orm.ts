import { FormSqlBaseOrm } from "../form.sql.base.orm";
import { FormPhoneSqlEntityProtocol } from "../../../../../../../../contract/protocol/domain/sql/postgre/form/phone/form.phone.sql.entity.protocol";
import { Column, Entity } from "typeorm";
@Entity({
  name: "FormPhone",
})
export class FormPhoneOrm
  extends FormSqlBaseOrm
  implements FormPhoneSqlEntityProtocol
{
  @Column({
    type: "varchar",
    length: 10,
    nullable: false,
  })
  CountryCode: string;
  @Column({
    type: "varchar",
    length: 20,
    nullable: false,
  })
  NationalDestinationCode: string;
  @Column({
    type: "varchar",
    length: 20,
    nullable: false,
  })
  SubscriberNumber: string;
}
