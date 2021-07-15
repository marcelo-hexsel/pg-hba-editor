import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('GET /', () => {
    it('should return application name, version and postgres version', async () => {
      const response = await request(app.getHttpServer()).get('/').expect(200);

      expect(
        response.text.startsWith('pg-hba-editor - local - PostgreSQL'),
      ).toBe(true);
    });
  });
});
