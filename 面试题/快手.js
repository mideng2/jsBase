let A = {
  a: 1
}
let B = {
  a: 2
}
let C = {
  a: 3
}
a = 0
function foo () {
  console.log(this.a)
}

(foo.bind(B). bind(A). bind(C))()
// foo()