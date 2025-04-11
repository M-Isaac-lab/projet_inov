import { Test, TestingModule } from '@nestjs/testing';
import { TypeVollaileService } from './type_vollaile.service';

describe('TypeVollaileService', () => {
  let service: TypeVollaileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeVollaileService],
    }).compile();

    service = module.get<TypeVollaileService>(TypeVollaileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
