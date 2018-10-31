const isIdentical = pos => pos.white[0] === pos.black[0] && pos.white[1] === pos.black[1];

const isDiagonal = (white, black) => Math.abs(white[0] - black[0]) === Math.abs(white[1] - black[1]);

const isAligned = (white, black) => white[0] === black[0] || white[1] === black[1];

export class Queens {
  constructor(pos = { white: [0, 3], black: [7, 3] }) {
    if (isIdentical(pos)) throw new Error('Queens cannot share the same space');
    this.white = pos.white;
    this.black = pos.black;
  }

  canAttack() {
    return isDiagonal(this.white, this.black) || isAligned(this.white, this.black);
  }

  toString() {
    const board = Array(8).fill(0).map(() => Array(8).fill('_'));
    board[this.white[0]][this.white[1]] = 'W';
    board[this.black[0]][this.black[1]] = 'B';
    const joinRows = board.map(grids => grids.join(' '));
    return `${joinRows.join('\n')}\n`;
  }
}
