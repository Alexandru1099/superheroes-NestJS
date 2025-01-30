import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './superhero.dto';
import { UseGuards } from '@nestjs/common';
import { HeroAuthGuard } from '../jwtAuth/jwtAuth.guard';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  addSuperhero(@Body() createSuperheroDto: CreateSuperheroDto) {
    return this.superheroesService.addSuperhero(
      createSuperheroDto.name,
      createSuperheroDto.superpower,
      createSuperheroDto.humilityScore,
    );
  }

  @Get()
  getSuperheroes() {
    return this.superheroesService.getSuperheroes();
  }
}
