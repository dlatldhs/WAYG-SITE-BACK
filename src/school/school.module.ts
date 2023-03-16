import { Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { TypeOrmExModule } from 'src/typeorm/typeorm.module';
import { SchoolRepository } from './school.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([SchoolRepository])],
  controllers: [SchoolController],
  providers: [SchoolService]
})
export class SchoolModule {}
