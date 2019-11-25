type F = Map<BigInt, number>

export class Frequencies {
  private freq: F = new Map()
  private string: string

  constructor() {
    this.freq = new Map()
  }

  public add(value: BigInt | number): void {
    const bigIntValue = BigInt(value)
    this.freq.set(bigIntValue, (this.freq.get(bigIntValue) || 0) + 1)
    this.regenerateString()
  }

  public size(): number {
    return this.freq.size
  }

  public sort(): F {
    return new Map([...this.freq.entries()].sort((a, b) =>
      Number(BigInt(b[1]) - BigInt(a[1]))))
  }

  public regenerateString(): void {
    this.string = ''
    this.sort().forEach((frequency: number, value: BigInt) =>
      this.string += `${value}:${frequency}, `)
    this.string = this.string.substr(0, this.string.length - 2) // remove last comma
  }

  public toString(): string {
    return this.string
  }
}
