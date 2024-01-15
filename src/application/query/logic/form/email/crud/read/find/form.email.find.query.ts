import { QueryBase } from "../../../../../../query.base";
import { FormEmailOrm } from "../../../../../../../../domain/model/sql/postgre/form/email/form.email.orm";
import { FormEmailService } from "../../../../../../../../domain/model/sql/postgre/form/email/form.email.service";
import { Injectable } from "@nestjs/common";
import { IdDto } from "../../../../../../dto/id.dto";
import { EmailDto } from "../../../../../../dto/email.dto";

@Injectable()
export class FormEmailFindQuery extends QueryBase<
  FormEmailOrm,
  FormEmailService
> {
  constructor(protected service: FormEmailService) {
    super(service);
  }
  async findEmailByFormId(inputDto: IdDto): Promise<EmailDto> {
    return this.service
      .createQueryBuilder()
      .select("fe.LocalPart", "localPart")
      .addSelect("fe.DomainPart", "domainPart")
      .where("fe.Id = :id", { id: inputDto.id })
      .getRawOne()
      .then((emailQueryResult: EmailDto) => ({
        localPart: emailQueryResult.localPart,
        domainPart: emailQueryResult.domainPart,
      }));
  }
}
