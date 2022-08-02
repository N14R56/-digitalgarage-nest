import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity({name: "cars"})
export class Car {
    @ObjectIdColumn()
    _id: any;

    @Column()
    brand: string;
  
    @Column()
    model: string;
  
    @Column()
    year: string;
}
