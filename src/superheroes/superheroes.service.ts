import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Superhero, SuperheroDocument } from './superhero.schema';

@Injectable()
export class SuperheroesService {
  constructor(
    @InjectModel(Superhero.name) private superheroModel: Model<SuperheroDocument>,
  ) {}

  async addSuperhero(name: string, superpower: string, humilityScore: number): Promise<Superhero> {
    const newSuperhero = new this.superheroModel({ name, superpower, humilityScore });
    return newSuperhero.save();
  }
  async getSuperheroes(): Promise<Superhero[]> {
    
    return this.superheroModel.find().sort({ humilityScore: -1 }).exec();
  }
}
