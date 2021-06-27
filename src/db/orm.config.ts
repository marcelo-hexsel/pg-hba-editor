import { TypeOrmModule } from '@nestjs/typeorm';

export const ORM_CONFIG = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_PORT),
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  entities: [],
  synchronize: false,
});
