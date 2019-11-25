import * as readline from 'readline'

export interface IListener {
  add: (fn: (str: string) => void) => void
  remove: () => void
}

export function createListener(): IListener {
  const readLineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  return {
    add: (fn: (str: string) => void) =>
      readLineInterface.on('line', (line: string) =>
        fn(line)),
    remove: () => {
      readLineInterface.close()
      process.exit(0)
    },
  }
}
