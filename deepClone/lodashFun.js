const cloneDeep = require('lodash').cloneDeep

let obj = {
  a: 1,
  b: {
    b1: 2,
    b2: {
      b21: [1, 2, 3],
      b22: () => {
        console.log('this is b22')
        return 'b22'
      }
    }
  },
  c: new Date(),
  d: /^\d+$/
}

let newObj = cloneDeep(obj)
console.log(newObj)
console.log(newObj.b.b2 === obj.b.b2)
