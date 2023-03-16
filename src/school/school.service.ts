import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { SchoolRepository } from './school.repository';


@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(SchoolRepository)
    private schoolRepository: SchoolRepository
  ) {}

  create(createSchoolDto: CreateSchoolDto) {
    return 'This action adds a new school';
  }

  async getFindAllSchool() {
    const query = this.schoolRepository.createQueryBuilder('School');

    const schools = await query.getMany();

    return schools;
  }

  findOne(id: number) {
    return `This action returns a #${id} school`;
  }

  update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return `This action updates a #${id} school`;
  }

  remove(id: number) {
    return `This action removes a #${id} school`;
  }
}
