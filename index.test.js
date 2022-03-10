const marsRover = require('./index')

test('Check gives correct answer for Right and Forward combinations', () => {
    expect(marsRover('55','33E','MMRMMRMRRM')).toEqual('5 1 E');
});