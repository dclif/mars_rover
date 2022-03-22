function marsRover(URCoords: string, start1: string, dir1: string, ...otherRovers: string[]){
    if (URCoords === undefined) throw new Error("Please provide the grid size");
    if (start1 === undefined) throw new Error("Please provide the gstart coordinates for your first rover");
    if (dir1 === undefined) throw new Error("Please provide the directions for your first rover.");
    if(arguments.length % 2 === 0) throw new Error("Please provide the directions for your rover")
        
        let rovers: Array<string> = [...arguments].slice(1);
        let finalCoordinates: string = '';

        function navigate(startPos: string, directions: string){
        
        const compass: Array<string> = ['N','E','S','W']
        let direction: number = compass.indexOf(startPos[2])
        let position: number[] = [+startPos[0], +startPos[1]];

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
            else if(element === "M" && direction === 1 && position[0] < +URCoords[0]){
                position[0]++;
            }
            else if(element === "M" && direction === 3 && position[0] > 0){
                position[0]--;
            }
            else if(element === "M" && direction === 0 && position[1] < +URCoords[1]){
                position[1]++;
            }
            else if(element === "M" && direction === 2 && position[1] > 0){
                position[1]--;
            }
            
         });
         finalCoordinates+= [...position, compass[direction]].join(' ') + "\n" ;
}


    for(let rover: number = 0; rover < rovers.length; rover+=2){
        navigate(rovers[rover],rovers[rover+1])
    }
    
    return finalCoordinates;
}


module.exports = marsRover;

