import { Test, TestingModule } from '@nestjs/testing';
import { EnvironnementService } from './environnement.service';

describe('EnvironnementService', () => {
  let service: EnvironnementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvironnementService],
    }).compile();

    service = module.get<EnvironnementService>(EnvironnementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
