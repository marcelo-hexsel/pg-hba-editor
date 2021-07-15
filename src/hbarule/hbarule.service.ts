import { Injectable } from '@nestjs/common';
import { CreateHbaruleDto } from './dto/create-hbarule.dto';
import { UpdateHbaruleDto } from './dto/update-hbarule.dto';

@Injectable()
export class HbaruleService {
  create(createHbaruleDto: CreateHbaruleDto) {
    return 'This action adds a new hbarule';
  }

  findAll() {
    return `This action returns all hbarule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hbarule`;
  }

  update(id: number, updateHbaruleDto: UpdateHbaruleDto) {
    return `This action updates a #${id} hbarule`;
  }

  remove(id: number) {
    return `This action removes a #${id} hbarule`;
  }
}
