import { Test, TestingModule } from '@nestjs/testing';
import { TypeAlimentController } from './type_aliment.controller';

describe('TypeAlimentController', () => {
  let controller: TypeAlimentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeAlimentController],
    }).compile();

    controller = module.get<TypeAlimentController>(TypeAlimentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
