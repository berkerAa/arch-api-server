import { Entity } from "typeorm";
import { ReverseEnumBaseOrm } from "../reverse.enum.base.orm";
import { ReverseEnumSqlConfirmationStateEntityProtocol } from "../../../../../../../../contract/protocol/domain/sql/postgre/reverse/confirmationState/reverse.enum.sql.confirmation.state.entity.protocol";

@Entity({
  name: "ReverseEnumConfirmation",
})
export class ReverseEnumConfirmationStateOrm
  extends ReverseEnumBaseOrm
  implements ReverseEnumSqlConfirmationStateEntityProtocol {}
