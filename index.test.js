const marsRover = require('./index')

test('Check gives correct answer for Right and Forward combinations', () => {
    expect(marsRover('55','12N','LMLMLMLMM', '33E', 'MMRMMRMRRM')).toEqual('1 3 N\n5 1 E\n');
});

// test('Check gives correct answer for Left and Forward combinations', () => {
//     expect(marsRover('55','12N','LMLMLMLMM')).toEqual('1 3 N');
// });

// test('Check rover will not over run grid boundaries', () => {
//     expect(marsRover('55','12N','LMMMMMLMMMMMM')).toEqual('0 5 W');
// });