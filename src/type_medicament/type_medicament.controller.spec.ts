import { Test, TestingModule } from '@nestjs/testing';
import { TypeMedicamentController } from './type_medicament.controller';

describe('TypeMedicamentController', () => {
  let controller: TypeMedicamentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeMedicamentController],
    }).compile();

    controller = module.get<TypeMedicamentController>(TypeMedicamentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
