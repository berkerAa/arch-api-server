import { ReverseEnumAttributeStateOrm } from "./attributeState/reverse.enum.attribute.state.orm";
import { ReverseEnumConfirmationStateOrm } from "./confirmationState/reverse.enum.confirmation.state.orm";

export const reverseEnumProvider = [
  ReverseEnumAttributeStateOrm,
  ReverseEnumConfirmationStateOrm,
];
