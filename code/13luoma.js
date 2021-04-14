var luoma = function (s) {
  let normal = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let special = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }
  let num = 0
  // 先来判断特殊的类型
  for (let key in special) {
    let index = s.indexOf(key)
    if (index > -1) {
      num = num + special[key]
      s = s.substr(0, index) + s.substr(index + key.length)
    }
  }

  while(s.length) {
    for (let key in normal) {
      let index = s.indexOf(key)
      if (index > -1) {
        num = num + normal[key]
        s = s.substr(0, index) + s.substr(index + 1)
      }
    }
  }
  

  return num
  
}

console.log(luoma('IXM'))