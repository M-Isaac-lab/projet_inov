import { Test, TestingModule } from '@nestjs/testing';
import { TypeVollaileController } from './type_vollaile.controller';

describe('TypeVollaileController', () => {
  let controller: TypeVollaileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeVollaileController],
    }).compile();

    controller = module.get<TypeVollaileController>(TypeVollaileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
