
// 需要按照 a,b,延迟1秒,c,延迟1秒,d,e, done 的顺序打印

// 作者：晨曦时梦见兮
// 链接：https://juejin.im/post/6860646761392930830
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const subFlow = createFlow([() => delay(1000).then(() => log("c"))]);

createFlow([
  () => log("a"),
  () => log("b"),
  subFlow,
  [() => delay(1000).then(() => log("d")), () => log("e")],
]).run(() => {
  console.log("done");
});

function createFlow (list) {
  
}