import { Test, TestingModule } from '@nestjs/testing';
import { DecesService } from './deces.service';

describe('DecesService', () => {
  let service: DecesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DecesService],
    }).compile();

    service = module.get<DecesService>(DecesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
