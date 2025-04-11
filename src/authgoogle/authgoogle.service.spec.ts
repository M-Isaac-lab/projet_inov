import { Test, TestingModule } from '@nestjs/testing';
import { AuthgoogleService } from './authgoogle.service';

describe('AuthgoogleService', () => {
  let service: AuthgoogleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthgoogleService],
    }).compile();

    service = module.get<AuthgoogleService>(AuthgoogleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
