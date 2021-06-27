import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class DatabaseRepository {
  constructor(private readonly connection: Connection) {}

  async databaseVersion(): Promise<string> {
    const postgresVersionResult = await this.connection.query(
      'select version();',
    );

    return postgresVersionResult[0].version;
  }
}
