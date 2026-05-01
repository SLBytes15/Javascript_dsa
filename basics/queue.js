class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(...items) {
    // input will e at first in queue
    items.forEach((val) => {
      this.items[this.tail++] = val;
      console.log(val);
    });
  }
  dequeue() {
    // remove from the back
    const item = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return item;
  }
  peek() {
    return this.items[this.head];
  }
}

const input = new Queue;
const append = input.enqueue(5, 6, 7);
const remove = input.dequeue();

console.log(input.peek());

