import { Test, TestingModule } from '@nestjs/testing';
import { HbaruleService } from './hbarule.service';

describe('HbaruleService', () => {
  let service: HbaruleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HbaruleService],
    }).compile();

    service = module.get<HbaruleService>(HbaruleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
