import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb';
import { Repository } from 'typeorm';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>
  ){}

  create(createCarDto: CreateCarDto) {
    let car1 = new Car()
    car1.brand = "Porsche"
    car1.model = "911"
    car1.year = "2017" 
    this.carsRepository.save(
      car1
    )
    return 'This action adds a new car';
  }

  findAll() {
    return this.carsRepository.find();
  }

  findOne(id: string) {
    return this.carsRepository.findOneBy({ '_id' : new ObjectId(id) });
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
