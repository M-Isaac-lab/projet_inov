import { Test, TestingModule } from '@nestjs/testing';
import { TypeAlimentService } from './type_aliment.service';

describe('TypeAlimentService', () => {
  let service: TypeAlimentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeAlimentService],
    }).compile();

    service = module.get<TypeAlimentService>(TypeAlimentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
