/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
  const rowTraverseMap = new Map();
  const columnTraverseMap = new Map();

  let sum = 0;

  // 逐行遍历，相加字符设置 map，重复则加一。
  for(let i = 0; i < grid.length; i++){
    let temp_row = '';
    for(let j = 0; j < grid[i].length; j++){
      // 避免一种极端情况：假如矩阵是 [[1, 11], [11, 1]]，这个时候我们没办法区分 111 到底是由 1 和 11 还是 11 和 1 加出来的，所以每个元素之间必须有间隔！！！！
      temp_row += (grid[i][j] + ',');
    }
    if(!rowTraverseMap.has(temp_row)){
      rowTraverseMap.set(temp_row, 1);
    }else{
      rowTraverseMap.set(temp_row, rowTraverseMap.get(temp_row) + 1);
    }
  }

  // 按列遍历。同理。
  for(let j = 0; j < grid[0].length; j++){
    let temp_col = '';
    for(let i = 0; i < grid.length; i++){
      temp_col += (grid[i][j] + ',');
    }
    if(!columnTraverseMap.has(temp_col)){
      columnTraverseMap.set(temp_col, 1);
    }else{
      columnTraverseMap.set(temp_col, columnTraverseMap.get(temp_col) + 1);
    }
  }

  for(let [row, val] of rowTraverseMap){
    if(columnTraverseMap.has(row)){
      sum += columnTraverseMap.get(row) * rowTraverseMap.get(row);
    }
  }

  return sum;
};