function marsRover(URCoords, startPos, directions){
        const compass = ['N','E','S','W']
        let direction = compass.indexOf(startPos[2])
        let position = [startPos[0], startPos[1]];

        directions.split('').forEach((element) => { 
        
            if(element === "L" && direction > 0){
                direction--;
            }
            else if(element === "L" && direction === 0){
                direction = 3;
            }
            else if(element === "R" && direction < 3){
                direction++;
            }
            else if(element === "R" && direction === 3){
                direction = 0;
            }
            else if(element === "M" && direction === 1){
                position[0]++;
            }
            else if(element === "M" && direction === 3){
                position[0]--;
            }
            else if(element === "M" && direction === 0){
                position[1]++;
            }
            else if(element === "M" && direction === 2){
                position[1]--;
            }
            
         });
         return [...position, compass[direction]].join(' ');

}

console.log(marsRover('55','33E','MMRMMRMRRM'))
module.exports = marsRover;