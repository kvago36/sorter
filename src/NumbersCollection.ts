import { Sorter } from './Sorter'

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super()
  }

  get length(): number {
    return this.data.length
  }

  compare(index: number): boolean {
    return this.data[index] > this.data[index + 1]
  }

  swap(index: number): void {
    const left = this.data[index]
    this.data[index] = this.data[index + 1]
    this.data[index + 1] = left
  }
}