/**
 * generates labyrinth
 * @param {number} rows
 * @param {number} cols
 * @param {object} start
 * @param {object} finish
 * @returns {string[][]}
 */
let generateLabyrinth = function (rows, cols = rows, start = { r: 0, c: 0 }, finish = { r: rows - 1, c: cols - 1 }) {
    //console.log(rows);
    //console.log(cols);
    let board = new Array(rows).fill().map(() => { return new Array(cols).fill(true); });
    //board[start.r][start.c] = 's';
    //board[finish.r][finish.c] = 'f';
    let path = [];
    path.push(start);
    while (board.some((row) => { return row.includes(true); })) {
        let [cr, cc] = Object.values(path[path.length - 1]);
        let dirs = {
            't': false,
            'r': false,
            'b': false,
            'l': false
        };
        if (cr > 0 && board[cr - 1][cc] === true) dirs['t'] = true;
        if (cr < rows - 1 && board[cr + 1][cc] === true) dirs['b'] = true;
        if (cc > 0 && board[cr][cc - 1] === true) dirs['l'] = true;
        if (cc < cols - 1 && board[cr][cc + 1] === true) dirs['r'] = true;
        let avail = Object.keys(dirs).filter(function (key) { return dirs[key] == true; });
        if (avail.length) {
            let next = Math.floor(Math.random() * avail.length);
            let next_dir = avail[next];
            switch (next_dir) {
                case 't': {
                    board[cr][cc] = 'A';
                    path.push({ r: cr - 1, c: cc });
                    break;
                }
                case 'r': {
                    board[cr][cc] = 'A';
                    path.push({ r: cr, c: cc + 1 });
                    break;
                }
                case 'b': {
                    board[cr][cc] = 'A';
                    path.push({ r: cr + 1, c: cc });
                    break;
                }
                case 'l': {
                    board[cr][cc] = 'A';
                    path.push({ r: cr, c: cc - 1 });
                    break;
                }
                default: {
                    break;
                }
            };
            console.log(next);
            console.log(next_dir);
        }
        else {
            path.pop();
        }
        board.forEach(function (row) {
            console.log(row.join(''));
        });
        console.log(dirs);
        console.log(avail);
        //break;
    }
    return board;
};