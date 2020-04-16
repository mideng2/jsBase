/**
 * 经典的js寄生组合式继承
 */
function MyDate() {
  Date.apply(this, arguments);
  this.abc = 1;
}

function inherits(subClass, superClass) {
  function Inner() {}
  
  Inner.prototype = superClass.prototype;
  subClass.prototype = new Inner();
  subClass.prototype.constructor = subClass;
}

inherits(MyDate, Date);

MyDate.prototype.getTest = function() {
  return this.getTime();
};


let date = new MyDate();

console.log(date.getTest());