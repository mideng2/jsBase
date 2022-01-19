
// 需要按照 a,b,延迟1秒,c,延迟1秒,d,e, done 的顺序打印

// 作者：晨曦时梦见兮
// 链接：https://juejin.im/post/6860646761392930830
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const subFlow = createFlow([() => delay(1000).then(() => log("c"))]);

// createFlow([
//   () => log("a"),
//   () => log("b"),
//   subFlow,
//   [() => delay(1000).then(() => log("d")), () => log("e")],
// ]).run(() => {
//   console.log("done");
// });

// function createFlow (list) {
  
// }






/**
 * 经过不懈努力，我终于把这个题弄出来了，虽然不完美，但是测试结果是对的，呜呜呜
*/
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const subFlow = createFlow([() => delay(1000).then(() => log('c'))])

createFlow([() => log('a'), () => log('b'), subFlow, [() => delay(1000).then(() => log('d')), () => log('e')]]).run(
  () => {
    console.log('done')
  }
)

// 需要按照 a,b,延迟1秒,c,延迟1秒,d,e, done 的顺序打印

/**
 * 
 * 按照上面的测试用例，实现 createFlow：

  flow 是指一系列 effects 组成的逻辑片段。
  flow 支持嵌套。
  effects 的执行只需要支持串行。
*/

function createFlow(effects = []) {
  async function flow() {
    // 遍历effects
    for (let i = 0; i < effects.length; i++) {
      let curr = effects[i]

      // 是flow
      if (curr.isFlow) {
        await curr.run()
      }
      // 数组，将数组拍平，放到原始数组中去，递归
      else if (curr instanceof Array) {
        await createFlow(curr).run()
      }
      // 异步的，执行promise代码，resolve后再执行下一个
      // else if (typeof curr.then === 'function') {
      //   console.log('是promise', curr)
      //   await curr()
      // }
      // // 同步的，立即执行
      // else if (typeof curr === 'function') {
      //   console.log('普通函数')
      //   curr()
      // }
      else {
        await curr()
      }
      
    }
  }

  // let flow = async function() {
  //   effects.reduce(async (acc, curr) => {
  //     // 同步的，立即执行
  //     if (typeof curr === 'function') {
  //       curr()
  //     }
  //     // 异步的，执行promise代码，resolve后再执行下一个
  //     else if (curr instanceof Promise || typeof curr.then === 'function') {
  //       await curr()
  //     }
  //     // 数组，将数组拍平，放到原始数组中去，递归
  //     else if (curr instanceof Array) {
  //       createFlow(curr)
  //     }
  //   })
  // }

  // flow.run = async cb => {
  //   await flow()
  //   cb && cb()
  // }

  return {
    isFlow: true,
    run: async cb => {
      await flow()
      cb && cb()
    }
  }

  // return {
  //   run: async cb => {
  //     await flow()
  //     cb()
  //   }
  // }

  // return async function () {
  //   effects.reduce(async (acc, curr) => {
  //     // 同步的，立即执行
  //     if (typeof curr === 'function') {
  //       curr()
  //     }
  //     // 异步的，执行promise代码，resolve后再执行下一个
  //     else if (curr instanceof Promise || typeof curr.then === 'function') {
  //       await curr()
  //     }
  //     // 数组，将数组拍平，放到原始数组中去，递归
  //     else if (curr instanceof Array) {
  //       createFlow(curr)
  //     }
  //   })
  // }

  // 遍历effects
  // for (let i = 0; i < effects.length; i++) {
  //   let item = effects[i]
  //   // 同步的，立即执行
  //   if (typeof item === 'function') {
  //   }
  //   // 异步的，执行promise代码，resolve后再执行下一个
  //   else if (item instanceof Promise || typeof item.then === 'function') {
  //   }
  //   // 数组，将数组拍平，放到原始数组中去，递归
  //   else if (item instanceof Array) {
  //     createFlow(item)
  //   }
  // }
}

function log(val) {
  console.log(val)
}
