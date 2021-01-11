// javascript下的进制转换非常方便，系统已经提供内置方法，提供2～36进制间的转型。直接提供表示的有8进制、10进制、16进制。
//十进制转其他 x.toString(n)
//其他转十进制 parseInt(x, n)
//其他转其他 先用parseInt转成十进制再用toString转到目标进制 

// 进制转换
// n进制 -> 10进制
// parseInt(m, n)
c(parseInt('e9', 16))

// 10进制 -> n进制
// x.toString(n)
c((233).toString(16))


function c (value) {
  console.log(value)
}