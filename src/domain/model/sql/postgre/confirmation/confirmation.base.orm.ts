import { PostgreSqlBaseOrm } from "../postgre.sql.base.orm";
import { ConfirmationSqlBaseEntityProtocol } from "../../../../../../../contract/protocol/domain/sql/postgre/confirmation/confirmation.sql.base.entity.protocol";
import { Column, JoinColumn, OneToOne } from "typeorm";
import { ReverseEnumConfirmationStateOrm } from "../reverse/confirmationState/reverse.enum.confirmation.state.orm";

export class ConfirmationBaseOrm
  extends PostgreSqlBaseOrm
  implements ConfirmationSqlBaseEntityProtocol
{
  @Column({
    type: "timestamp",
    nullable: true,
    default: () => null,
  })
  ConfirmationDate: Date;
  @Column({
    type: "int",
  })
  ConfirmationStateId: number;
  @Column({
    type: "timestamp",
    nullable: false,
    default: () => null,
  })
  ExpirationDate: Date;
  @JoinColumn({ name: "ConfirmationStateId" })
  @OneToOne(
    () => ReverseEnumConfirmationStateOrm,
    (confirmationStateOrm) => confirmationStateOrm.Id,
  )
  confirmationState: ReverseEnumConfirmationStateOrm;
}
