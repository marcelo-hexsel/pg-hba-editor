import { Injectable, Logger } from '@nestjs/common';
import { Connection } from 'typeorm';
import { APP_NAME } from './constants';
import { DatabaseRepository } from './db/database.repository';

@Injectable()
export class AppService {
  constructor(private readonly databaseRepository: DatabaseRepository) {}

  async getApplicationStatus(): Promise<string> {
    const postgresVersion = await this.databaseRepository.databaseVersion();
    return `${APP_NAME} - ${process.env.VERSION} - ${postgresVersion}`;
  }
}
