function Find(target, array)
{
    // write code here
    let rowLen = array.length
    if (!rowLen) {
        return false
    }
    let colLen = array[0].length
    if (!colLen) {
        return false
    }
    let min = array[0][0]
    let max = array[rowLen - 1][colLen - 1]
    // if (target === min || target === max) {
    //   return true
    // } else 
    if (target < min || target > max) {
        return false
    }
    return compare(target, Math.floor(rowLen / 2), Math.floor(colLen / 2))
    
    function compare (target, i, j) {
      if (i < 0 || i > rowLen - 1 || j < 0 || j > colLen - 1) {
        return false
      }
        if (target === array[i][j]) {
            return true
        } else if (target < array[i][j]) {
            return (i > 0 && j > 0 && compare(target, i - 1, j - 1)) || (i > 0 && compare(target, i - 1, j)) || (j > 0 && compare(target, i, j - 1))
        } else if (target > array[i][j]) {
            return (i < rowLen - 1 && j < colLen - 1 && compare(target, i + 1, j + 1)) || (i < rowLen - 1 && compare(target, i + 1, j)) || (j < colLen - 1 && compare(target, i, j + 1))
        } else {
            return false
        }
    }
}



// Find(7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]])
// Find(15,[
//   [1,2,8,9],
//   [2,4,9,12],
//   [4,7,10,13],
//   [6,8,11,15]])
console.log(Find(1, [[1]]))