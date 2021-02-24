// // 20210118 新感悟
// // 手写promise，领会新感悟

// function myPromise (executor) {
//   var self = this
//   self.status = 'pending'
//   self.value
//   self.reason
//   self.onResolvedCallbacks = [] // 存放所有成功的回调。
//   self.onRejectedCallbacks = [] // 存放所有失败的回调。
//   function resovle (value) {
//     if (self.status === 'pending') {
//       self.value = value
//       self.status = 'resolved'
//       self.onResolvedCallbacks.forEach((fn) => {
//         fn()
//       })
//     }
//   }

//   function reject (reason) {
//     if (self.status === 'pending') {
//       self.reason = reason
//       self.status = 'rejected'
//       self.onRejectedCallbacks.forEach((fn) => {
//         fn()
//       })
//     }
//   }
//   // 立即执行
//   executor(resovle, reject)
// }

// myPromise.prototype.then = function (onFulfilled, onRejected) {
//   var self = this
//   // if (self.status === 'resolved') {
//   //   onFulfilled(self.value)
//   // }

//   // if (self.status === 'rejected') {
//   //   onRejected(self.reason)
//   // }

//   // if (self.status === 'pending') {
//   //   self.onResolvedCallbacks.push(function () {
//   //     onFulfilled(self.value)
//   //   })
//   //   self.onRejectedCallbacks.push(function () {
//   //     onRejected(self.value)
//   //   })
//   // }


//   const promise2 = new Promise(function (resolve, reject) {
//     if (self.status === 'resolved') {
//       try {
//         const x = onFulfilled(self.value)
//         resolve(x)
//       } catch (error) {
//         reject(error)
//       }
//     }
//     if (self.status === 'rejected') {
//       try {
//         const x = onRejected(self.reason)
//         resolve(x)
//       } catch (error) {
//         reject(error)
//       }
//     }
//     if (self.status === 'pending') {
//       self.onResolvedCallbacks.push(function () {
//         try {
//           const x = onFulfilled(self.value)
//           resolve(x)
//         } catch (error) {
//           reject(error)
//         }
//       })
//       self.onRejectedCallbacks.push(function() {
//         try {
//           const x = onRejected(self.reason)
//           resolve(x)
//         } catch (error) {
//           reject(error)
//         }
//       })
//     }
//   })
//   return promise2
// }

// let p = new myPromise(function(resovle, reject){
//   resovle('成功了')
//   reject('失败了') 
// })

// p.then(function(value){
//   console.log(value)
// }, function(reason) {
//   console.log(reason)
// })