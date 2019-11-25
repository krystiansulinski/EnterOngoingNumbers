
import { Fibonacci } from './fibonacci'
import { Frequencies } from './frequencies'
import { IListener } from './nodeInputStreamListener'
import { COMMANDS, PROMPTS, setPrompt } from './prompts'
import { TimeKeeper } from './timeKeeper'

export class App {
  private timer: TimeKeeper
  private freq: Frequencies
  private fib: Fibonacci
  private logFunction: (str: string) => void
  private removeListener: () => void
  private typedQuit: boolean

  constructor(printFn: (str: string) => void, listener: IListener, prompt: string,
              fibonacciLimit = 1000) {
    this.freq = new Frequencies()
    this.fib = new Fibonacci(fibonacciLimit)
    this.logFunction = printFn
    this.removeListener = listener.remove
    setPrompt(prompt)

    this.log(PROMPTS.WELCOME)
    this.listen(listener.add)
  }

  private listen(listener: (fn: (line: string) => void) => void): void {
    listener((line: string) => {
      const num: BigInt = this.getEnteredBigInt(line)

      if (num > 0n) {
        !this.timer ? this.setupFrequencyOutput(Number(num)) : this.addNumbers(num)
      } else {
        switch (line) {
          case COMMANDS.QUIT:
            this.quit()
            break
          case COMMANDS.HALT:
            this.halt()
            break
          case COMMANDS.RESUME:
            this.resume()
            break
          default:
            if (this.typedQuit) {
              this.removeListener()
            }
        }
      }
    })
  }

  private getEnteredBigInt(line: string): BigInt {
    let num: BigInt
    try {
      num = BigInt(line)
    } catch (e) {
      num = BigInt(0)
    }
    return num
  }

  private setupFrequencyOutput(num: number) {
    this.log(PROMPTS.ENTER_FIRST_NUMBER)
    this.timer = new TimeKeeper(num)
  }

  private addNumbers(num: BigInt) {
    if (!this.timer.isHalted()) {
      if (!this.timer.isTicking()) {
        this.timer.start(() => this.logFunction(this.freq.toString()))
      }
      if (this.fib.has(num)) {
        this.log(PROMPTS.FIBONACCI)
      }
      this.log(PROMPTS.ENTER_NEXT_NUMBER)
      this.freq.add(num)
    }
  }

  private quit() {
    if (this.timer) {
      this.timer.halt()
    }
    if (this.freq.size()) {
      this.log(this.freq.toString())
    }
    this.log(PROMPTS.FAREWELL)
    this.typedQuit = true
  }

  private halt() {
    if (this.timer && this.timer.isTicking() && !this.timer.isHalted()) {
      this.timer.halt()
      this.log(PROMPTS.TIMER_HALTED)
    }
  }

  private resume() {
    if (this.timer && this.timer.isHalted()) {
      this.timer.resume()
      this.log(PROMPTS.TIMER_RESUMED)
    }
  }

  private log(str: string): void {
    this.logFunction((PROMPTS.DEFAULT + str))
  }
}
