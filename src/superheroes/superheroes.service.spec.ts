import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';

describe('SuperheroesController', () => {
  let controller: SuperheroesController;
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [SuperheroesService],
    }).compile();

    controller = module.get<SuperheroesController>(SuperheroesController);
    service = module.get<SuperheroesService>(SuperheroesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should add and retrieve superheroes sorted by humility score', () => {
    service.addSuperhero('Test', 'Test', 5);
    service.addSuperhero('The best', 'Alex', 10);

    const superheroes = service.getSuperheroes();
    expect(superheroes[0].name).toBe('The best');
    expect(superheroes[1].name).toBe('Alex');
  });
});