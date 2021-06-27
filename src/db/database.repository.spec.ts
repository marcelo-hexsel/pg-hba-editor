import { Connection } from "typeorm";
import { DatabaseRepository } from "./database.repository";


describe('databaseRepository', () => {
    let repository: DatabaseRepository;
    let connection: Connection = jest.createMockFromModule('typeorm');

    beforeEach(() => {
        repository = new DatabaseRepository(connection);
    });

    it('Should call postgres version function and return its results', async () => {
        connection.query = jest.fn(() => {
            return Promise.resolve([{ version: 'fake postgres version' }]);

        });
        const dataBaseVersion = await repository.databaseVersion();
        expect(dataBaseVersion).toBe('fake postgres version');
        expect(connection.query).toBeCalledWith('select version();');
    });
});


