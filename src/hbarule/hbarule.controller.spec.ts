import { Test, TestingModule } from '@nestjs/testing';
import { HbaruleController } from './hbarule.controller';
import { HbaruleService } from './hbarule.service';

describe('HbaruleController', () => {
  let controller: HbaruleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HbaruleController],
      providers: [HbaruleService],
    }).compile();

    controller = module.get<HbaruleController>(HbaruleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
