
const solution = require('./solution');


test("Sexagenary Cycle - Chinese Zodiac", () => {
    expect(solution.sexagenary(1971)).toBe('Metal Pig');
    expect(solution.sexagenary(1927)).toBe('Fire Rabbit');
    expect(solution.sexagenary(2017)).toBe('Fire Rooster');
    expect(solution.sexagenary(2000)).toBe('Metal Dragon');
    expect(solution.sexagenary(1958)).toBe('Earth Dog');
    expect(solution.sexagenary(1942)).toBe('Water Horse');
    expect(solution.sexagenary(1974)).toBe('Wood Tiger');
});