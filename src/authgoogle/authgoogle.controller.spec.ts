import { Test, TestingModule } from '@nestjs/testing';
import { AuthgoogleController } from './authgoogle.controller';

describe('AuthgoogleController', () => {
  let controller: AuthgoogleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthgoogleController],
    }).compile();

    controller = module.get<AuthgoogleController>(AuthgoogleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
