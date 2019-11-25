export const PROMPTS = {
  DEFAULT: '',
  ENTER_FIRST_NUMBER: 'Please enter the first number',
  ENTER_NEXT_NUMBER: 'Please enter the next number',
  FAREWELL: 'Thanks for playing, press ENTER to exit.',
  FIBONACCI: 'FIB',
  TIMER_HALTED: 'timer halted',
  TIMER_RESUMED: 'timer resumed',
  // tslint:disable-next-line:max-line-length
  WELCOME: 'Please input the number of time in seconds between emitting numbers and their frequency',
}

export const COMMANDS = {
  HALT: 'halt',
  QUIT: 'quit',
  RESUME: 'resume',
}

export function setPrompt(str: string) {
  PROMPTS.DEFAULT = str
}
