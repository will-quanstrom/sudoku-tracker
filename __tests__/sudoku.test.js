import { Grid } from './../src/sudoku.js';

describe('Grid', () => {
  test('should correctly check if a cells number repeats itself in another cell', () => {
    var row = new Grid([[1,3,5,4,2,7,2,8,9],[1,3,5,4,2,7,2,8,9],[1,3,5,4,2,7,2,8,9],[1,3,5,4,2,7,2,8,9],[1,3,5,4,2,7,2,8,9],[1,3,5,4,2,7,2,8,9],[1,3,5,4,2,7,2,8,9],[1,3,5,4,2,7,2,8,9],[1,3,5,4,2,7,2,8,9]]);
    expect(row.checkRow()).toEqual('Incorrect!');
    });
  test('should correctly check if a cells number doesnt repeat itself in a row', () => {
    var row = new Grid([[1,2,3,4,5,6,7,8,9]],[2,3,4,5,6,7,8,9,1],[3,4,5,6,7,8,9,1,2],[4,5,6,7,8,9,1,2,3],[5,6,7,8,9,1,2,3,4],[6,7,8,9,1,2,3,4,5],[7,8,9,1,2,3,4,5,6],[8,9,1,2,3,4,5,6,7],[9,1,2,3,4,5,6,7,8]);
    expect(row.checkRow()).toEqual('Correct!');
  });

  test('should correctly check if a cells number repeats itself in another cell', () => {
    var col = new Grid([[1,3,5,4,2,7,2,8,9],[1,3,5,4,2,7,2,8,9],[1,3,5,4,2,7,2,8,9],[1,3,5,4,2,7,2,8,9],[1,3,5,4,2,7,2,8,9],[1,3,5,4,2,7,2,8,9],[1,3,5,4,2,7,2,8,9],[1,3,5,4,2,7,2,8,9],[1,3,5,4,2,7,2,8,9]]);
    expect(col.checkCol()).toEqual('Incorrect!');
    });
  test('should correctly check if a cells number doesnt repeat itself in a row', () => {
    var col = new Grid([[1,2,3,4,5,6,7,8,9],[2,3,4,5,6,7,8,9,1],[3,4,5,6,7,8,9,1,2],[4,5,6,7,8,9,1,2,3],[5,6,7,8,9,1,2,3,4],[6,7,8,9,1,2,3,4,5],[7,8,9,1,2,3,4,5,6],[8,9,1,2,3,4,5,6,7],[9,1,2,3,4,5,6,7,8]]);
    expect(col.checkCol()).toEqual('Correct!');
  });

});
