import { FormPersonOrm } from "./person/form.person.orm";
import { FormPhoneOrm } from "./phone/form.phone.orm";
import { FormPasswordOrm } from "./password/form.password.orm";
import { FormEmailOrm } from "./email/form.email.orm";
import { FormCodeOrm } from "./code/form.code.orm";

export const formProvider = [
  FormPersonOrm,
  FormPhoneOrm,
  FormPasswordOrm,
  FormEmailOrm,
  FormCodeOrm,
];
