
function getType(obj) {
  const str = Object.prototype.toString.call(obj);
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  // if (obj instanceof Element) {
  //   // 判断是否是dom元素，如div等
  //   return 'element';
  // }
  return map[str];
}

//简单版深拷贝，列举三个例子 array object function，可以自行扩展。主要是引发大家的思考

function deepCopy(ori) {
  const type = getType(ori);
  let copy;
  switch (type) {
    case 'array':
      return copyArray(ori, type, copy);
    case 'object':
      return copyObject(ori, type, copy);
    case 'function':
      return copyFunction(ori, type, copy);
    case 'regExp':
      return new RegExp(ori)
    case 'date':
      return new Date(ori.getTime())
    default:
      return ori;
  }
}

// 显然 数组和对象的区别只有初始化的类型不同 
//  let cloneTarget = Array.isArray(target) ? [] : {};
function copyArray(ori, type, copy = []) {
  for (const [index, value] of ori.entries()) {
    copy[index] = deepCopy(value);
  }
  return copy;
}

function copyObject(ori, type, copy = {}) {
  for (const [key, value] of Object.entries(ori)) {
    copy[key] = deepCopy(value);
  }
  return copy;
}

// lodash的做法，如果是函数类型，则直接返回之前的函数，没有进行克隆
// 此种方式只适用于箭头函数，function会报错
function copyFunction(ori, type, copy = () => {}) {
  const fun = eval(ori.toString());
  fun.prototype = ori.prototype
  return fun
}

// 只解决date，reg类型，其他的可以自己添加
// 结构化拷贝，这个蛮厉害的
function isObj (val) {
  return val !== null && typeof val === 'object' 
}
function deepCopyByCtor(obj, hash = new WeakMap()) {
    let cloneObj
    let Constructor = obj.constructor // 只有对象猜有constructor，普通值没有，也不需要深拷贝
    switch(Constructor){
        case RegExp:
            cloneObj = new Constructor(obj)
            break
        case Date:
            cloneObj = new Constructor(obj.getTime())
            break
        default:
            if(hash.has(obj)) return hash.get(obj) // 避免循环引用
            cloneObj = new Constructor()
            hash.set(obj, cloneObj)
    }
    for (let key in obj) {
        cloneObj[key] = isObj(obj[key]) ? deepCopyByCtor(obj[key], hash) : obj[key];
    }
    return cloneObj
}


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

let copyObj = deepCopy(obj)
console.log(copyObj)
console.log(copyObj.c === obj.c)
console.log(copyObj.c.getTime(), obj.c.getTime())
