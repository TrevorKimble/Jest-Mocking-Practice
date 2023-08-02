const math = require('./math');
const Database = require('./database');

jest.mock('./database');

describe('Math operations', () => {
  test('Addition with database', () => {
    const mockAddData = jest.fn();
    math.db.addData = mockAddData; // Using math.db to access the db instance

    const result1 = math.add(2, 3);
    const result2 = math.add(10, 3);
    const result3 = math.add(1, 1);

    expect(mockAddData).toHaveReturned()
    expect(mockAddData).toHaveReturnedTimes(3)

    expect(result1).toBe(5);
    expect(mockAddData).toHaveBeenCalledWith(result1);
    expect(mockAddData).toHaveBeenCalledWith(result2);
    expect(mockAddData).toHaveBeenCalledWith(result3);
  });
});