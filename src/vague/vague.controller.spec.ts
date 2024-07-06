import { Test, TestingModule } from '@nestjs/testing';
import { VagueController } from './vague.controller';

describe('VagueController', () => {
  let controller: VagueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VagueController],
    }).compile();

    controller = module.get<VagueController>(VagueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
