/**
 * 看了n多遍，还是容易忘
*/

let arr = [
  {
    id: 1,
    name: '哈利'
  },
  {
    id: 2,
    name: '赫敏'
  },
  {
    id: 3,
    name: '罗恩'
  }
]

let obj = {
  age: 18,
  sex: 'male',
  name: 'Harry',
  education: 'senior'
}

for (const key in arr) {
  if (Object.hasOwnProperty.call(arr, key)) {
    const element = arr[key]
    console.log('element in arr', element)
  }
  console.log('key in arr', key)
}

for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    const element = obj[key]
    console.log('element in obj', element)
  }
  console.log('key in obj', obj)
}

for (const iterator of arr) {
  console.log('iterator of arr', iterator)
}

// obj 不是一个可迭代的，所以不能使用 for of
for (const iterator of obj) {
  console.log('iterator of obj', iterator)
}