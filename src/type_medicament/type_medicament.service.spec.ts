import { Test, TestingModule } from '@nestjs/testing';
import { TypeMedicamentService } from './type_medicament.service';

describe('TypeMedicamentService', () => {
  let service: TypeMedicamentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeMedicamentService],
    }).compile();

    service = module.get<TypeMedicamentService>(TypeMedicamentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
