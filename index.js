function marsRover(URCoords, start1, dir1, start2, dir2){
        let finalCoordinates = '';
        function navigate(startPos, directions){
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
            else if(element === "M" && direction === 1 && position[0] < URCoords[0]){
                position[0]++;
            }
            else if(element === "M" && direction === 3 && position[0] > 0){
                position[0]--;
            }
            else if(element === "M" && direction === 0 && position[1] < URCoords[1]){
                position[1]++;
            }
            else if(element === "M" && direction === 2 && position[1] > 0){
                position[1]--;
            }
            
         });
         finalCoordinates+= [...position, compass[direction]].join(' ') + "\n" ;
}
    navigate(start1,dir1)
    navigate(start2,dir2)
    return finalCoordinates;
}

module.exports = marsRover;

