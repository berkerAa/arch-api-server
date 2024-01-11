import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { DB_SOURCE } from "../../../../../../contract/enum/system/db.source.enum";
import { postgreSqlFactory } from "./postgre.sql.factory";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          isGlobal: false,
        }),
      ],
      name: DB_SOURCE.POSTGRE_SQL,
      useFactory: postgreSqlFactory,
      inject: [ConfigService],
    }),
  ],
})
export default class PostgreSqlDatabaseModule {}
