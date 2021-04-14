/**
 * 页面上有三个按钮，分别为 A、B、C，点击各个按钮都会发送异步请求且互不影响，每次请求回来的数据都为按钮的名字。
 * 请实现当用户依次点击 A、B、C、A、C、B 的时候，最终获取的数据为 ABCACB。
 * 
*/
// function delay (val) {
//   return new Promise ((resovle, reject) => {
//     let time = Math.ceil(Math.random * 3000)
//     setTimeout(() => {
//       resovle(val)
//     }, time);
//   })
// }
// let arr = ['A', 'B', 'C', 'A', 'C', 'B']
// function sendr () {
//   let promiseArr = arr.map((item) => {
//     return Promise.resolve(delay(item))
//   })
//   console.log(promiseArr)
//   Promise.all(promiseArr).then((res) => {
//     console.log(res)
//   })
// }
// sendr()


// class Queue {
//   promise = Promise.resolve();

//   excute(promise) {
//     this.promise = this.promise.then(() => promise);
//     return this.promise;
//   }
// }

// const queue = new Queue();

// const delay = (params) => {
//   const time = Math.floor(Math.random() * 5);
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(params);
//     }, time * 500);
//   });
// };

// const handleClick = async (name) => {
//   const res = await queue.excute(delay(name));
//   console.log(res);
// };

// handleClick('A');
// handleClick('B');
// handleClick('C');
// handleClick('A');
// handleClick('C');
// handleClick('B');




var a = 0
var b = async () => {
  a = a + await 10
  console.log('2', a) // -> ？
}
b()
a++
console.log('1', a) // -> ？


// 1
// 11