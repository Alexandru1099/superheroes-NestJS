import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SuperheroesService } from './superheroes.service';
import { SuperheroesController } from './superheroes.controller';
import { Superhero, SuperheroSchema } from './superhero.schema';
import { AuthModule } from '../jwtAuth/jwtAuth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Superhero.name, schema: SuperheroSchema }]),
    AuthModule,
  ],
  controllers: [SuperheroesController],
  providers: [SuperheroesService],
})
export class SuperheroesModule {}