# Chakra UI and React Implementation of Conway's Game of Life

John Conway's game of life is an example of cellular automaton. It is a zero player game, meaning that its evolution is derived from its current state. The status of each cell changes each turn of the game (also called a generation) depending on the statuses of that cell's 8 neighbors.

## Rules of The Game
1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

[Wiki Reference](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

## Deployed App

[Redirect to Netlify Deployment](https://admirable-swan-e6238c.netlify.app)

## How to Run App Locally
### Pre-Requisites:
- Must have npm installed on local device
### Steps:
1. Clone this repository
2. Use npm to install all the dependencies
3. Run the project using `npm run start`
4. Go to http://localhost:3000 with the browser of your choice

#### This project was bootstrapped with create-react-app


