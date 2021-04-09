/**
 * 二维数组 顺时针遍历
*/

let arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]


function traversal (arr) {
    while (arr.length > 0){
        arr.shift().forEach(element => {
            console.log(element)
        });
        if (arr.length) {
            arr = change(arr)
        }
    }
}

// 翻转数组 m*n n*m
function change (arr) {
    let m = arr.length
    let n = arr[0].length
    let newArr = Array.from({ length: n }).map(() => [])

    for (let i = 0;i<m;i++) {
        for(let j = 0;j<n;j++){
            newArr[n-1-j][i] = arr[i][j]
        }
    }
    return newArr
}

traversal(arr)