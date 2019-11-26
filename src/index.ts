import { App } from './app'
import { createListener } from './nodeInputStreamListener'

// tslint:disable-next-line:no-console
const app = new App((str: string) => console.log(str), createListener(), '>> ')
