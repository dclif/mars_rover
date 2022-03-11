const marsRover = require('./index')

test('Check gives correct answer for  Left, Right and Forward combinations', () => {
    expect(marsRover('55','12N','LMLMLMLMM', '33E', 'MMRMMRMRRM')).toEqual('1 3 N\n5 1 E\n');
});

test('Check rover will not over run grid boundaries', () => {
    expect(marsRover('55','12N','LMMMMMMLMMMMMM', '33E', 'MMRRRMMM')).toEqual('0 0 S\n5 5 N\n');
});

test('Check will throw error if paramaters are missing', () => {
    expect(() => {marsRover('55','12N','LMMMMMMLMMMMMM', '33E')}).toThrow();
});