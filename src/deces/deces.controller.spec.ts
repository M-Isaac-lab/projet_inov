import { Test, TestingModule } from '@nestjs/testing';
import { DecesController } from './deces.controller';

describe('DecesController', () => {
  let controller: DecesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DecesController],
    }).compile();

    controller = module.get<DecesController>(DecesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
