import { Module } from '@nestjs/common';
import { typeORMConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { SchoolModule } from './school/school.module';
import { ConfigModule } from '@nestjs/config'; // npm i @nestjs/config , npm i cross-env

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    SchoolModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    })
  ],
})
export class AppModule {}
