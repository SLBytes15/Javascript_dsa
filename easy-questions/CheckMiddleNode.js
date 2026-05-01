class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(...value) {
    value.forEach((val) => {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    });
  }

  findMiddle() {
    let slow = this.head;
    let fast = this.head;

    while (fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  output() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const node = new LinkedList();

node.append(5, 6, 7, 8, 9);

const middleNode = node.findMiddle();

console.log("Middle Node is", middleNode.value);
