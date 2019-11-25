export class Fibonacci {
  public numbers: Set<BigInt>

  constructor(limit: number) {
    if (limit > -1) {
      this.calculate(limit)
    }
  }

  public has(num: BigInt | number): boolean {
    return this.numbers.has(BigInt(num))
  }

  private calculate(limit: number): void {
    this.numbers = new Set()
    let previous = 0n
    let current = 1n
    let newLimit = limit

    if (newLimit > 2) {
      // fibonaccis have one duplicate (number 1), but a set stores unique values
      newLimit = newLimit - 1
    }

    for (let i = 0n; this.numbers.size < newLimit; i = i + 1n) {
      this.numbers.add(previous)
      const tmp = previous
      previous = current
      current = tmp + current
    }
  }
}
