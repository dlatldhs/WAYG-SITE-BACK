import { BaseEntity , Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class School extends BaseEntity {
    @Column()
    institution: string;

    @Column()
    gender: string;
    
    @Column()
    school_type: string;
    
    @PrimaryColumn()
    school_name: string;

    @Column()
    address: string;
    
    @Column()
    call_num: string;
    
    @Column()
    found_date: string;
    
    @Column()
    site: string;
}