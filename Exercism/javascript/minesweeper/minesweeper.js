export class Minesweeper  {
    
    constructor() {

    }

    annotate(board) {
       
        return board.map((row, rowIdx) => {
            return [...row]
                .map((col, idx) => {
                    //fetch number of adjacent bombs
                    return adjacentBombs([...board], rowIdx, col, idx);



                })
                .join('');
        });
    }
}

const adjacentBombs = (board, rowIdx, col, idx) => {
    let bombs = 0;
    console.log(board);
    console.log(rowIdx, 'rowIdx');

    // row above
    if(rowIdx - 1 >= board.length) {
        bombs += board[rowIdx -1].reduce((acc, val) => {            
            return val === '*' ? acc + 1 : acc + 0;
        });
    }

    // on own row
    bombs += board[rowIdx].reduce((acc, val) => {            
        return val === '*' ? acc + 1 : acc + 0;
    });
    
    // on row below
    if(rowIdx +1 <= board.length) {
        bombs += board[rowIdx +1].reduce((acc, val) => {            
            return val === '*' ? acc + 1 : acc + 0;
        });
    }

    



    return bombs;
}



export default Minesweeper;