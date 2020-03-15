function spinSide90Right(matrix, index, N){
  if(N<2){
    return matrix;
  }
  //rotate corner values
  if(N==2){
        var tempCornerTopLeft = matrix[index][index];
    var tempCornerTopRight = matrix[index][N-1];
    var tempCornerBotLeft = matrix[N-1][index];
    var tempCornerBotRight = matrix[N-1][N-1];
    console.log(tempCornerTopLeft,tempCornerTopRight, tempCornerBotLeft,tempCornerBotRight)
    //rotate corner vals
    matrix[index][index] = tempCornerBotLeft;
    matrix[index][N-1] = tempCornerTopLeft;
    matrix[N-1][index] = tempCornerBotRight;
    matrix[N-1][N-1] = tempCornerTopRight;
    return matrix;
  }
  if(N > 2){
    var tempCornerTopLeft = matrix[index][index];
    var tempCornerTopRight = matrix[index][N-1];
    var tempCornerBotLeft = matrix[N-1][index];
    var tempCornerBotRight = matrix[N-1][N-1];
    //console.log(tempCornerTopLeft,tempCornerTopRight, tempCornerBotLeft,tempCornerBotRight)
    //rotate corner vals
    matrix[index][index] = tempCornerBotLeft;
    matrix[index][N-1] = tempCornerTopLeft;
    matrix[N-1][index] = tempCornerBotRight;
    matrix[N-1][N-1] = tempCornerTopRight;
  }
  //rotate all side vals
  for(var i=index+1; i<N-1; i++){

        var tempTop = matrix[index][i];
        var tempRight = matrix[i][N-1];
        var tempBot = matrix[N-1][N-i-1];
        var tempLeft = matrix[N-1-i][index];
        matrix[i][N-1] = tempTop;
        matrix[N-1][N-i-1] = tempRight;
        matrix[N-1-i][index] = tempBot;
        matrix[index][i] = tempLeft;
  }
  return spinSide90Right(matrix, index+1, N-1);
 
};
