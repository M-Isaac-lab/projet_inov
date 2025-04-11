import { Test, TestingModule } from '@nestjs/testing';
import { EnvironnementController } from './environnement.controller';

describe('EnvironnementController', () => {
  let controller: EnvironnementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnvironnementController],
    }).compile();

    controller = module.get<EnvironnementController>(EnvironnementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
