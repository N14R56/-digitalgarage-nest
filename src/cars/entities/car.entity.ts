import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity({name: "cars"})
export class Car {
    @ObjectIdColumn()
    _id: ObjectID;
  
    @Column()
    brand: string;
  
    @Column()
    model: string;
  
    @Column()
    year: string;
}
