export function Grid(array) {
this.row1 = array
  // this.c1 = c1,
  // this.c2 = c2,
  // this.c3 = c3,
  // this.c4 = c4,
  // this.c5 = c5,
  // this.c6 = c6,
  // this.c7 = c7,
  // this.c8 = c8,
  // this.c9 = c9
}

// export function Column(c1, c2, c3, c4, c5, c6, c7, c8, c9) {
//   this.c1 = c1,
//   this.c2 = c2,
//   this.c3 = c3,
//   this.c4 = c4,
//   this.c5 = c5,
//   this.c6 = c6,
//   this.c7 = c7,
//   this.c8 = c8,
//   this.c9 = c9
// }

Grid.prototype.checkRow = function() {
  // var rowArray = [this.c1, this.c2, this.c3, this.c4, this.c5, this.c6, this.c7, this.c8, this.c9];
  for (var count = 0; count<this.row1.length;count++)
  {
    for(var i = 0; i <= 8; i++){
      if(this.row1[count][i] > 9 || this.row1[count][i] < 1){
        return 'Please use a number from 1 to 9.';
      }
      for(var j = i + 1; j <= 8; j++) {
        if(this.row1[count][j] == this.row1[count][i]){
          return 'Incorrect!';
        }
      }
    }
  }
  return 'Correct!';
}
Grid.prototype.checkCol = function(){
  for (var count = 0; count<this.row1.length;count++)
  {
    for(var i = 0; i <= 8; i++){
      if(this.row1[i][count] > 9 || this.row1[i][count] < 1){
        return 'Please use a number from 1 to 9.';
      }
      for(var j = i + 1; j <= 8; j++) {
        if(this.row1[j][count] == this.row1[i][count]){
          return 'Incorrect!';
        }
      }
    }
  }
  return 'Correct!';
}
