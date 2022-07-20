import { Entity, Column, PrimaryGeneratedColumn, ObjectID } from 'typeorm';

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    _id: ObjectID;
  
    @Column()
    brand: string;
  
    @Column()
    model: string;
  
    @Column()
    year: string;
}
