import { GET } from './get.model'; // Adjust the import path as necessary
import { conn } from '../../config'; // Adjust the import path as necessary
import { ConnectionPool, Request, Int } from 'mssql';

jest.mock('../../../src/config', () => ({
    conn: jest.fn()
}));

describe('GET.recordByIdAndQuery', () => {
    const mockRecordset = [
        {  Name: 'ViewRoleList' },
        {  Name: 'ViewRoleDetails' },
        {  Name: 'CreateRole' },
    ];

    let mockRequest: Partial<Request>;
    let mockPool: Partial<ConnectionPool>;

    beforeEach(() => {
        mockRequest = {
            query: jest.fn().mockResolvedValue({ recordset: mockRecordset }),
        };

        mockPool = {
            request: jest.fn().mockReturnValue(mockRequest as Request),
            setMaxListeners: jest.fn()
        };

        (conn as jest.Mock).mockResolvedValue(mockPool as ConnectionPool);
    });

    it('should throw an error if database query returns no results', async () => {
        mockRequest.query = jest.fn().mockResolvedValue({ recordset: [] });
        const query = 'SELECT * FROM [User] WHERE [Id] = 999'; const id = 1;
        await expect(GET.recordByIdAndQuery(id, query)).rejects.toThrow('Database query returned no results');
    });

    it('should retrieve records based on the provided query and Id', async () => {
        const query = 'SELECT [Name] FROM [AccessRight] WHERE [Id] <= @Id';
        const id = 3;
        const result = await GET.recordByIdAndQuery(id, query);
        expect(result).toEqual(mockRecordset);
    });

    it('should throw an error if Id is not a valid number', async () => {
        const query = 'SELECT * FROM Users WHERE Id = @Id';
        const id: any = 'invalid';
        await expect(GET.recordByIdAndQuery(id, query)).rejects.toThrow('Id must be a valid number');
    });

    it('should throw an error if Id is not provided', async () => {
        const query = 'SELECT * FROM Users WHERE Id = @Id';
        const id = 0;
        await expect(GET.recordByIdAndQuery(id, query)).rejects.toThrow('Id must be a positive non-zero number');
    });

    it('should throw an error if Query is not provided as a string', async () => {
        const query: any = null;
        const id = 1;
        await expect(GET.recordByIdAndQuery(id, query)).rejects.toThrow('Query must be provided as a non-empty string');
    });


    it('should handle database connection errors', async () => {
        const query = `SELECT * FROM [Users] WHERE [Id] = @Id`;
        const id = 1;
        (conn as jest.Mock).mockRejectedValueOnce(new Error('Connection failed'));
        await expect(GET.recordByIdAndQuery(id, query)).rejects.toThrow('Error function recordByIdAndQuery: Internal Server Error');
    });

    it('should throw a generic error for any other issues', async () => {
        const query = 'SELECT * FROM Users WHERE Id = @Id';
        const id = 1;
        mockRequest.query = jest.fn().mockRejectedValue(new Error('Some unexpected error'));
        await expect(GET.recordByIdAndQuery(id, query)).rejects.toThrow('Error function recordByIdAndQuery: Internal Server Error');
    });
});