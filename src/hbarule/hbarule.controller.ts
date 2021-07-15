import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
} from '@nestjs/common';
import { HbaruleService } from './hbarule.service';
import { CreateHbaruleDto } from './dto/create-hbarule.dto';
import { UpdateHbaruleDto } from './dto/update-hbarule.dto';

@Controller('hbarule')
export class HbaruleController {
  constructor(private readonly hbaruleService: HbaruleService) {}

  @Post()
  create(@Body() createHbaruleDto: CreateHbaruleDto) {
    Logger.warn(JSON.stringify(createHbaruleDto));

    // return this.hbaruleService.create(createHbaruleDto);
  }

  @Get()
  findAll() {
    return this.hbaruleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hbaruleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHbaruleDto: UpdateHbaruleDto) {
    return this.hbaruleService.update(+id, updateHbaruleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hbaruleService.remove(+id);
  }
}
