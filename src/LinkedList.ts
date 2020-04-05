import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter{
  constructor() {
    super()
  }
  
  head: Node | null = null;

  add(value: number): void {
    const node = new Node(value)

    if (!this.head) {
      this.head = node
      return;
    }

    let tail = this.head

    while (tail.next) {
      tail = tail.next
    }

    tail.next = node
  }

  get length(): number {
    if (!this.head) {
      return 0
    }

    let length = 1
    let node = this.head

    while (node.next) {
      length++;
      node = node.next
    }

    return length
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("Empty list");
    }

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++
      node = node.next
    }

    throw new Error("Index out of bounds");
  }

  compare(index: number): boolean {
    if (!this.head) {
      throw new Error("Empty list");
    }

    return this.at(index).data > this.at(index + 1).data
  }

  swap(index: number): void {
    const left = this.at(index)
    const right = this.at(index + 1)

    const leftHand = left.data
    left.data = right.data
    right.data = leftHand
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head

    while (node) {
      console.log(node.data)
      node = node.next
    }
  }
}