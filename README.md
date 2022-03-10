# Mars Rover
Mars Rover Kata

## Table of contents
* [Outline of Kata](#Outline-of-Kata)
* [Technologies](#technologies)
* [Setup](#setup)

## Outline of Kata
This project is to create a rover that navigates a grid on an X and Y axis. 
Given inputs are grid size, initial coordinates of rover and directions to travel.
Valid input strings.
* Two digit string indicating X and Y axis dimensions.
* Two digits followed by cardinal direction N,E,S,W indicating the initial coordinates of the rover.
* String containing a combination of directions L for a 90 degree left turn, R for a 90 degree right turn and M for a a single movement forward along the grid.

Valid output: X and Y coordinates followed by direction which the rover is facing. E.G 5 5 N

Example input: 
5 5
1 2 N
LMLMLMLMM

Expected Output: 
1 3 N 
5 1 E 

## Technologies
Project is created with:
* Typescript 4.6.2
* Jest 27.5.1

	
## Setup
To run this project, install it locally using npm:

```
$ cd ../mars_rover
$ npm install
$ npm start
```
