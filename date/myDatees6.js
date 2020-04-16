class MyDate extends Date {
  constructor(props) {
      super();
      this.abc = props;
  }
  getTest() {
      return this.getTime();
  }
}

let date = new MyDate('qzh');

console.log(date.abc)