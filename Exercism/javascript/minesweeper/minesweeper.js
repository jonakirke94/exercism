
const bombsOnRow = (row, idx) => {
  let bombs = 0;
  if (row.length >= idx - 1) {
    bombs += row[idx - 1] === '*' ? 1 : 0; // left
    bombs += row[idx] === '*' ? 1 : 0; // above
    bombs += row[idx + 1] === '*' ? 1 : 0; // right
  }
  return bombs;
};

const adjacentBombs = (board, rowIdx, row, colIdx) => {
  let bombs = 0;

  // ABOVE ROW
  if (rowIdx > 0) {
    const upperRow = board[rowIdx - 1];
    bombs += bombsOnRow(upperRow, colIdx);
  }

  // OWN ROW
  bombs += bombsOnRow(row, colIdx);

  // BELOW ROW
  if (rowIdx < board.length - 1) {
    const lowerRow = board[rowIdx + 1];
    bombs += bombsOnRow(lowerRow, colIdx);
  }

  if (row[colIdx] === '*') {
    return '*';
  }
  if (bombs === 0) {
    return ' ';
  }

  return bombs;
};

export class Minesweeper {
  annotate(board) {
    const hasMines = board.some(row => [...row].includes('*'));
    if (!hasMines) return board;

    return board.map((row, rowIdx) => [...row]
      .map((col, colIdx) => (col === ' ' ? adjacentBombs(board, rowIdx, row, colIdx) : col))
      .join(''));
  }
}


export default Minesweeper;
