/**
 * 事件队列使用了链表结构，链表更适合“更删”，数组更适合查找。
 * 更删改：存放数组是一块连续的存储，数组改变要挪动后续的位置，成本高，链表是分散的，增删比较方便。
 * 查找：数组可以按照下标寻找，链表查找需要从头查到尾
 * 
 * 在解除事件绑定的时候，需要循环整个队列，将不是once的加回队列
 * 
*/

class Events {
  constructor (opts) {
    if (typeof opts !== 'undefined' && opts.callbacks) {
      this.callbacks = opts.callbacks
    } else {
      this.callbacks = {}
    }
  }

  on (events, callback, context) {
    let calls, event, node, tail, list
    if (!callback) {
      return this
    }
    // 为多个事件绑定回调
    events = events.split(Events.eventSplitter)
    calls = this.callbacks
    while ((event = events.shift())) {
      list = calls[event]
      node = list ? list.tail : {}
      node.next = tail = { s: new Date().getTime() }  // 将最新加入的回调赋值给tail，tail永远是最后一个
      node.context = context
      node.callback = callback
      calls[event] = {
        tail,
        next: list ? list.next : node
      }
      console.log(JSON.stringify(calls[event]))
      console.log('********************************************************')
    }

    console.log('on &&&&&&&&&&&& this.callbacks', JSON.stringify(this.callbacks))
    return this
  }

  once (events, callback, context) {
    // console.log('once')
    const wrapper = (...args) => {
      callback.apply(this, args)
      this.off(events, wrapper, context)
    }

    this.on(events, wrapper, context)

    return this
  }

  // 
  off (events, callback, context) {
    console.log('==off== param', events)
    let event, calls, node, tail, cb, ctx
    // 回调队列里没有cb 直接返回
    if (!(calls = this.callbacks)) {
      return this
    }
    // 清空回调队列
    if (!(events || callback || context)) {
      delete this.callbacks
      return this
    }
    events = events ? events.split(Events.eventSplitter) : Object.keys(calls)
    while ((event = events.shift())) {
      node = calls[event]
      console.log('off calls', event, JSON.stringify(calls[event]))
      delete calls[event] // 都先删掉
      console.log('off deleted', JSON.stringify(this.callbacks))
      console.log('off deleted 2', JSON.stringify(calls[event]))

      if (!node || !(callback || context)) {
        continue
      }
      tail = node.tail
      while ((node = node.next) !== tail) { 
        // 只要有once，就需要删掉当前事件队列中所有回调函数，筛选出还需要再执行的，要再加回来
        cb = node.callback
        ctx = node.context
        // 如果传入的callback和当前节点保存的cb不一致，才会加到队列中
        if ((callback && cb !== callback) || (context && ctx !== context)) {
          this.on(event, cb, ctx)
          console.log('再一次加入')
          console.log('cb', cb)
          console.log('callback', callback)
          console.log('ctx', ctx)
          console.log('context', context)
        }
      }
    }
    return this
  }

  trigger (events) {
    let event, node, calls, tail, rest
    if (!(calls = this.callbacks)) {
      return this
    }
    events = events.split(Events.eventSplitter)
    rest = [].slice.call(arguments, 1)
    // 这是个双层循环
    while ((event = events.shift())) {    
      // 其中一个事件，node是事件对应的链表节点
      if ((node = calls[event])) {
        console.log('TRIGGER node', node)
        tail = node.tail
        while ((node = node.next) !== tail) {
          node.callback.apply(node.context || this, rest)
        }
      }
    }
    console.log('trigger &&&&&&&&&& callbacks', JSON.stringify(this.callbacks))
    return this
  }
}

Events.eventSplitter = /\s+/

const eventBus = new Events()

exports.eventBus = eventBus
