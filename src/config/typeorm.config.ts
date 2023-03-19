import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { School } from "src/school/entities/school.entity";
import { ConfigService } from '@nestjs/config';
import * as dotenv from "dotenv";
dotenv.config()
export const typeORMConfig : TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.HOST,
    port: 31779,//3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/../**/*.entity.{js,ts}',School],
    synchronize: true
}