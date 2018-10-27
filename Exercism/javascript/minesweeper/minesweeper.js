
const bombsOnRow = (row, idx) => {
  let bombs = 0;
  if (row.length >= idx - 1) {
    bombs += row[idx - 1] === '*' ? 1 : 0;
    bombs += row[idx] === '*' ? 1 : 0;
    bombs += row[idx + 1] === '*' ? 1 : 0;
  }
  return bombs;
};

export class Minesweeper {
  annotate(board) {
    const hasMines = board.some(row => [...row].includes('*'));
    if (!hasMines) return board;

    return board.map((row, rowIdx) => [...row]
      .map((col, colIdx) => (col === ' ' ? this.adjacentBombs(board, rowIdx, row, colIdx) : col))
      .join(''));
  }

  adjacentBombs(board, rowIdx, row, colIdx) {
    this.bombs = 0;

    // ABOVE ROW
    if (rowIdx > 0) {
      const upperRow = board[rowIdx - 1];
      this.bombs += bombsOnRow(upperRow, colIdx);
    }

    // OWN ROW
	  this.bombs += bombsOnRow(row, colIdx);


    // BELOW ROW
    if (rowIdx < board.length - 1) {
      const lowerRow = board[rowIdx + 1];
	  this.bombs += bombsOnRow(lowerRow, colIdx);
    }

    if (row[colIdx] === '*') {
      return '*';
    } 
    
    if (this.bombs === 0) {
      return ' ';
    }

    return this.bombs;
  }
}


export default Minesweeper;
