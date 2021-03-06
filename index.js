var http = require('http');
var sud = require('./sudoku.js');

var sudoku_data = [
    [5,3,2,9,8,6,7,4,1],
    [4,8,7,2,1,5,3,6,9],
    [6,9,1,4,3,7,5,8,2],
    [3,2,5,1,7,4,8,9,6],
    [7,6,4,3,9,8,1,2,5],
    [8,1,9,5,6,2,4,3,7],
    [1,5,6,8,2,3,9,7,4],
    [9,7,8,6,4,1,2,5,3],
    [2,4,3,7,5,9,6,1,8]
];

var server = http.createServer(function (req, res) {
    res.write("Sudoku Result : " +sud.Sudoku.init(sudoku_data).isValid());
    res.end();
});

server.listen(8000);

console.log("server running on http://localhost:8000");