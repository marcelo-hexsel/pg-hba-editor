import { Module } from '@nestjs/common';
import { HbaruleService } from './hbarule.service';
import { HbaruleController } from './hbarule.controller';

@Module({
  controllers: [HbaruleController],
  providers: [HbaruleService]
})
export class HbaruleModule {}
