class Stack {
  constructor() {
    this.stack = [];
    this.maxSize = 100;
    this.top = -1;
  }

  push(value) {
    if (this.top === this.maxSize) {
      console.log("Stack is overflow");
      return false;
    }

    this.top++;
    this.stack[this.top] = value;
    return true;
  }

  pop() {
    if (this.top === -1) {
      console.log("Stack is already empty");
      return null;
    }

    const item = this.stack[this.top];
    this.top--;
    const tempArr = [];

    for (let i = 0; i <= this.top; i++) {
      tempArr.push(this.stack[i]);
    }
    this.stack = tempArr;

    return item;
  }

  peek() {
    if (this.top === -1) {
      console.log("Stack is already empty");
      return null;
    }

    return this.stack[this.top];
  }
}

const stack = new Stack();
console.log("Initial Stack");
console.log(stack);

stack.push(1);
stack.push(2);
stack.push(3);

console.log("\nAfter pushing 3 items");
console.log(stack);

console.log("\nAfter pop 1 item");
console.log("pop item is ", stack.pop());
console.log(stack);

console.log("\n Peek 1 element");
console.log("Peek item is ", stack.peek());
console.log(stack);



