/**
 * 使用promise实现间隔1秒输出1，2，3
*/


// const arr = [1, 2, 3]
// const fn = (val) => (new Promise((resolve) => {
//   setTimeout(() => {
//     console.log(val)
//     resolve()
//   }, 1000)
// }))

// arr.reduce((acc, cur) => {
//   return acc.then(() => {
//      fn(cur)
//   })
// }, Promise.resolve())


/**
 * 使用Promise实现红绿灯交替重复亮
 * 红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？
*/
// const fnmap = {
//   red() {
//     console.log('red');
//   },
//   yellow() {
//     console.log('yellow');
//   },
//   green() {
//     console.log('green');
//   }
// }

// const obj = {
//   red: 3000,
//   yellow: 2000,
//   green: 1000,
// }
// let arr = Object.keys(obj)

// let light = (key) => (new Promise((resolve) => {
//   let time = obj[key]
//   setTimeout(() => {
//     fnmap[key]()
//     resolve()
//   }, time);
// }))

// function startLight(){
//   arr.reduce((acc, cur, idx) => {
//     return acc.then(() => {
//       if(idx === arr.length - 1){
//         setTimeout(() => {
//           startLight()
//         }, obj[arr[idx]]);
//       }
//       return light(cur)
//     })
//   }, Promise.resolve())
// }

// startLight()

/**
 * 实现mergePromise函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组data中。
 * 
*/
const time = (timer) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, timer)
  })
}
const ajax1 = () => time(2000).then(() => {
  console.log(1);
  return 1
})
const ajax2 = () => time(1000).then(() => {
  console.log(2);
  return 2
})
const ajax3 = () => time(1000).then(() => {
  console.log(3);
  return 3
})

function mergePromise (arr) {
  // 在这里写代码
  let result = []
  // return new Promise((resolve) => {
  //   let a = arr.reduce((acc, cur, idx) => {
  //     return acc.then(() => {    
  //       return cur().then((res) => {
  //         result.push(res)
  //       })
  //     })
  //   }, Promise.resolve())
  //   a.then(() => {
  //     resolve(result)
  //   })
  // })

  let p = Promise.resolve()
  arr.forEach(element => {
    p = p.then(element).then((res) => {
      result.push(res)
      return result
    })
  });
  return p
}

mergePromise([ajax1, ajax2, ajax3]).then(data => {
  console.log("done");
  console.log(data); // data 为 [1, 2, 3]
});

// 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]
