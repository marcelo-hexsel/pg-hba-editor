import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService = jest.createMockFromModule('./app.service');

  beforeEach(async () => {
    appController = new AppController(appService);
  });

  describe('/', () => {
    it('should return call appService for application status', async () => {
      appService.getApplicationStatus = jest.fn(() =>
        Promise.resolve('fake application status'),
      );

      expect(await appController.getApplicationStatus()).toBe(
        'fake application status',
      );
    });
  });
});
