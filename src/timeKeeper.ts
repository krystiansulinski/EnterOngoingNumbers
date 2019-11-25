export class TimeKeeper {
  private started: number
  private halted: boolean
  private remaining: number
  private interval: NodeJS.Timeout
  private callback: (str: string) => void

  constructor(delay: number) {
    this.remaining = delay * 1000
  }

  public start(callback: (str: string) => void): void {
    this.started = 0
    this.halted = false
    this.callback = callback

    this.resume()
  }

  public halt(): void {
    if (this.isTicking()) {
      this.halted = true
      clearInterval(this.interval)
    }
  }

  public resume(): void {
    if (this.isHalted() || this.started === 0) {
      this.halted = false
      this.started = Date.now()
      this.interval = setInterval(this.callback, this.remaining)
    }
  }

  public getFrequency(): number {
    return this.remaining
  }

  public isTicking(): boolean {
    return this.interval !== undefined
  }

  public isHalted(): boolean {
    return this.halted
  }
}
