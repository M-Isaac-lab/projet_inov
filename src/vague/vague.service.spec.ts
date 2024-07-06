import { Test, TestingModule } from '@nestjs/testing';
import { VagueService } from './vague.service';

describe('VagueService', () => {
  let service: VagueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VagueService],
    }).compile();

    service = module.get<VagueService>(VagueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
