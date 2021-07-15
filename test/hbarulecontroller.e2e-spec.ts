import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateHbaruleDto } from 'src/hbarule/dto/create-hbarule.dto';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

const PATH = '/hbarule';

describe('AppController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe(`POST ${PATH}`, () => {
    it('should create hbarule successfuly', () => {
      const hbaRule = <CreateHbaruleDto>{
        type: 'host',
        databases: ['all'],
        users: ['all'],
        address: '127.0.0.1',
        netmask: '255.255.255.255',
        authMethod: 'trust',
      };

      request(app.getHttpServer()).post(PATH).send(hbaRule).expect(200);
    });
  });
});
