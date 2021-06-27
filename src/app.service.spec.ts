import { AppService } from './app.service';
import { DatabaseRepository } from './db/database.repository';

describe('AppService', () => {
  let appService: AppService;
  let databaseRepository: DatabaseRepository;

  beforeEach(() => {
    databaseRepository = jest.createMockFromModule('./db/database.repository');
    appService = new AppService(databaseRepository);
  });

  describe('getApplicationStatus', () => {
    it('should return application name, version and postgres version', async () => {
      process.env.VERSION = 'fake_app_version';
      databaseRepository.databaseVersion = jest.fn(() =>
        Promise.resolve('fake_postgres_version'),
      );

      const applicationStatus = await appService.getApplicationStatus();

      expect(applicationStatus).toBe(
        'pg-hba-editor - fake_app_version - fake_postgres_version',
      );
    });
  });
});
