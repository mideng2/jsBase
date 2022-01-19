class Queue {
 
  constructor () {
    this.promise = Promise.resolve()
  }

  excute(promise) {
    console.log(promise, 'promise')
    this.promise = this.promise.then(() => {
      return promise
    })
    return this.promise
  }
}

const queue = new Queue()

const delay = params => {
  const time = Math.floor(Math.random() * 5)
  return new Promise(resolve => {
    let t = time * 1000
    console.log(t)
    setTimeout(() => {
      resolve(params)
    }, t)
  })
}

const handleClick = async name => {
  const res = await queue.excute(delay(name))
  console.log(res)
}

handleClick('A')
handleClick('B')
handleClick('C')
setTimeout(()=>{
  handleClick('A')
  handleClick('C')
  setTimeout(() => {
    handleClick('B')
  }, 800)
},2000)