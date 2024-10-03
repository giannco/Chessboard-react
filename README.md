# Chessboard with Knight's Tour

An interactive chessboard with a knight piece that moves randomly around the board, demonstrating the Knight's Tour problem.

## Screenshot

!Chessboard

Screenshot of the chessboard with the knight piece.

## Features

- An 8x8 chessboard with alternating white and black squares.
- A knight piece that moves randomly around the board every second.
- The knight piece uses the Unicode character 🐎.
- The knight's movement is restricted to the possible moves of a knight in chess (L-shape moves).

## How it Works

The project uses React and Vite to create the chessboard and animate the knight's movement. The React components dynamically create the chessboard, place the knight piece on the starting square, and then move the knight to a random adjacent square every second.

## Possible Moves

The knight piece can move in the following ways:

- 2 squares in one direction (horizontally or vertically), then 1 square in a perpendicular direction.
- 1 square in one direction (horizontally or vertically), then 2 squares in a perpendicular direction.

These moves are represented by the following arrays:

These moves are represented by the following arrays:

let possibleMoves = [

    [-2, -1], [-2, 1], [-1, -2], [-1, 2],

    [1, -2], [1, 2], [2, -1], [2, 1]

];

## Testing

This project uses Jest for testing. The tests cover the knight’s movement logic and ensure that the knight only moves to valid squares on the chessboard.

## License

This project is licensed under the MIT License.

## Author

[Gian Franco Marcano]

## Acknowledgments

This project was inspired by the Knight's Tour problem, a classic problem in computer science and mathematics.
