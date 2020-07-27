// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
    // if (this.getFirst() === this.getLast()) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    if (this.head === null) {
      this.insertFirst(data)
    } else {
      let node = this.getLast();
      node.next = new Node(data);
    }
  }
  getAt(index) {

    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
    counter ++;
    node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index-1);
    if (!previous || !previous.next) return;
    previous.next = previous.next.next;
}

insertAt(data,index) {
  if (!this.head) {
    // this.head = new Node(data);
    this.insertFirst(data);
    return;
  }

  if (index === 0) {
    // this.head = new Node(data, this.head);
    this.insertFirst(data);
    return;
  }

  const prev = this.getAt(index-1) || this.getLast();
  const node = new Node(data, prev.next);
  prev.next = node;

}

  


}

module.exports = { Node, LinkedList };
