import { Repository } from "typeorm";
import { CustomRepository } from "src/typeorm/typeorm.decorator";
import { School } from "./entities/school.entity";

@CustomRepository(School)
export class SchoolRepository extends Repository<School> {
    
}