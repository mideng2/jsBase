// 20210118 新感悟
// 手写promise，领会新感悟

// proimse使用
// then默认返回的是上一个promise，除非上一个promise返回一个新的promise

// let promise = new Promise((resovle, reject) => {
//   setTimeout(() => {
//     resovle('1秒后')
//   }, 1000);
// })

// promise.then((value) => {
//   console.log('value是：', value)
//   setTimeout(() => {
//     console.log(2)
//   }, 1000);
//   return new Promise((resovle, reject) => {
//     setTimeout(() => {
//       resovle('2秒后')
//     }, 1000);
//   })
// }).then((value) => {
//   console.log(3)
//   console.log('', value)
// })

// 构造函数的方式创造promise
function myPromise (executor) {
  var self = this
  self.status = 'pending'
  self.value
  self.reason
  self.onResolvedCallbacks = [] // 存放所有成功的回调。 ？？这里的意思是同一个promise可以被执行多个then？
  self.onRejectedCallbacks = [] // 存放所有失败的回调。
  function resovle (value) {
    if (self.status === 'pending') {
      self.value = value
      self.status = 'resolved'
      self.onResolvedCallbacks.forEach((fn) => {
        fn()
      })
    }
  }

  function reject (reason) {
    if (self.status === 'pending') {
      self.reason = reason
      self.status = 'rejected'
      self.onRejectedCallbacks.forEach((fn) => {
        fn()
      })
    }
  }
  // 立即执行，往执行函数中传入两个函数。
  // 相当于当条件满足的时候执行回调函数，并且改变状态，把结果value挂在当前promise对象上
  executor(resovle, reject) // 这个函数同步执行，也就是在定义promise时执行的
}


// 1、在前一步执行完后执行
// 2、返回promise，链式调用
myPromise.prototype.then = function (onFulfilled, onRejected) {
  var self = this
  // if (self.status === 'resolved') {
  //   onFulfilled(self.value)
  // }

  // if (self.status === 'rejected') {
  //   onRejected(self.reason)
  // }

  // if (self.status === 'pending') {
  //   self.onResolvedCallbacks.push(function () {
  //     onFulfilled(self.value)
  //   })
  //   self.onRejectedCallbacks.push(function () {
  //     onRejected(self.value)
  //   })
  // }


  const promise2 = new myPromise(function (resolve, reject) {
    if (self.status === 'resolved') {
      try {
        const x = onFulfilled(self.value) // 执行完后将结果resolve
        resolve(x)
      } catch (error) {
        reject(error)
      }
    }
    if (self.status === 'rejected') {
      try {
        const x = onRejected(self.reason)
        resolve(x)
      } catch (error) {
        reject(error)
      }
    }
    if (self.status === 'pending') {
      self.onResolvedCallbacks.push(function () {
        try {
          const x = onFulfilled(self.value)
          resolve(x)
        } catch (error) {
          reject(error)
        }
      })
      self.onRejectedCallbacks.push(function() {
        try {
          const x = onRejected(self.reason)
          resolve(x)
        } catch (error) {
          reject(error)
        }
      })
    }
  })
  return promise2
}

let p = new myPromise(function(resovle, reject){
  setTimeout(() => {
    console.log('console一秒后')
    resovle('1秒后')
  }, 1000);
  resovle('成功了')
  reject('失败了') 
})

p.then(function(value){
  setTimeout(() => {
    console.log('2', value)
  }, 1000);
  return new myPromise((resovle, reject) => {
    setTimeout(() => {
      resovle('3')
    }, 1000);
  })
}, function(reason) {
  console.log(reason)
}).then((value) => {
  console.log('4', value)
})

