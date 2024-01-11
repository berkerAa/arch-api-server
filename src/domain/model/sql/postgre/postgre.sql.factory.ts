import { CONFIG_ENV_POSTGRESQL } from "../../../../../../contract/enum/system/config.env.postgresql";
import { DialectSql } from "../../../../../../contract/enum/system/dialect.sql";
import { ConfigService } from "@nestjs/config";
import { formProvider } from "./form/form.provider";
import { attributeProvider } from "./attribute/attribute.provider";
import { resourceProvider } from "./resource/resource.provider";
import { reverseEnumProvider } from "./reverse/reverse.enum.provider";
import { ObjectLiteral } from "typeorm";

export const postgreSqlFactory = (
  configService: ConfigService,
): ObjectLiteral => ({
  type: DialectSql.POSTGRESQL, // Specify the PostgreSQL dialect
  host: configService.get<string>(CONFIG_ENV_POSTGRESQL.HOST),
  port: +configService.get(CONFIG_ENV_POSTGRESQL.PORT),
  username: configService.get<string>(CONFIG_ENV_POSTGRESQL.USERNAME),
  password: configService.get<string>(CONFIG_ENV_POSTGRESQL.PASSWORD),
  database: configService.get<string>(CONFIG_ENV_POSTGRESQL.DATABASE),
  entities: [
    ...formProvider,
    ...attributeProvider,
    ...resourceProvider,
    ...reverseEnumProvider,
  ], // Your PostgreSQL entities
  logging: true,
  synchronize: false, // Be cautious with this in production environments
});
