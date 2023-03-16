import { Module } from '@nestjs/common';
import { typeORMConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { SchoolModule } from './school/school.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), SchoolModule],
})
export class AppModule {}
