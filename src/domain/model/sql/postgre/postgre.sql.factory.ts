import { CONFIG_ENV_POSTGRESQL } from "../../../../../../contract/enum/system/config.env.postgresql";
import { DialectSql } from "../../../../../../contract/enum/system/dialect.sql";
import { ConfigService } from "@nestjs/config";
import { formProvider } from "./form/form.provider";
import { attributeProvider } from "./attribute/attribute.provider";
import { resourceProvider } from "./resource/resource.provider";
import { reverseEnumProvider } from "./reverse/reverse.enum.provider";
import { ObjectLiteral } from "typeorm";
import { confirmationProvider } from "./confirmation/confirmation.provider";

export const postgreSqlFactory = (
  configService: ConfigService,
): ObjectLiteral => ({
  type: DialectSql.POSTGRESQL, // Specify the PostgreSQL dialect
  host: configService.get<string>(CONFIG_ENV_POSTGRESQL.HOST),
  port: +configService.get(CONFIG_ENV_POSTGRESQL.PORT),
  username: configService.getOrThrow<string>(
    CONFIG_ENV_POSTGRESQL.DB_USERNAME as string,
  ),
  password: configService.getOrThrow<string>(
    CONFIG_ENV_POSTGRESQL.DB_PASSWORD as string,
  ),
  database: configService.get<string>(CONFIG_ENV_POSTGRESQL.DATABASE),
  entities: [
    ...formProvider,
    ...attributeProvider,
    ...resourceProvider,
    ...reverseEnumProvider,
    ...confirmationProvider,
  ], // Your PostgreSQL entities
  logging: true,
  synchronize: false, // Be cautious with this in production environments
});
