const marsRover = require('./index')

test('Check rover turns left', () => {
    expect(marsRover('55','12N','L')).toEqual('1 2 W\n');
});

test('Check rover turns right', () => {
    expect(marsRover('55','12N','R')).toEqual('1 2 E\n');
});

test('Check rover moves forward', () => {
    expect(marsRover('55','12N','M')).toEqual('1 3 N\n');
});

test('Check accepts two rovers', () => {
    expect(marsRover('55','12N','M', '33E', 'M')).toEqual('1 3 N\n4 3 E\n');
});

test('Check gives correct answer for  Left, Right and Forward combinations with two rovers', () => {
    expect(marsRover('55','12N','LMLMLMLMM', '33E', 'MMRMMRMRRM')).toEqual('1 3 N\n5 1 E\n');
});

test('Check rovers will not over run grid boundaries', () => {
    expect(marsRover('55','12N','LMMMMMMLMMMMMM', '33E', 'MMRRRMMM')).toEqual('0 0 S\n5 5 N\n');
});

test('Check accepts three rovers', () => {
    expect(marsRover('55','12N','LMMMMMMLMMMMMM', '33E', 'MMRRRMMM', '00E', 'MLMRM')).toEqual('0 0 S\n5 5 N\n2 1 E\n');
});

test('Check will throw error if paramaters are missing', () => {
    expect(() => {marsRover('55','12N','LMMMMMMLMMMMMM', '33E')}).toThrow();
});

test('Check will throw error if paramaters are missing', () => {
    expect(() => {marsRover('55','12N','LMMMMMMLMMMMMM', '33E','LMMMMMMLMMMMMM', '33E' )}).toThrow();
});

