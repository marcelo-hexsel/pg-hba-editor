import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
const initializedConfigModule = ConfigModule.forRoot();

import { ORM_CONFIG } from './db/orm.config';
import { DatabaseRepository } from './db/database.repository';
import { HbaruleModule } from './hbarule/hbarule.module';

@Module({
  imports: [initializedConfigModule, ORM_CONFIG, HbaruleModule],
  controllers: [AppController],
  providers: [AppService, DatabaseRepository],
})
export class AppModule {}
