import { PartialType } from '@nestjs/mapped-types';
import { CreateHbaruleDto } from './create-hbarule.dto';

export class UpdateHbaruleDto extends PartialType(CreateHbaruleDto) {}
