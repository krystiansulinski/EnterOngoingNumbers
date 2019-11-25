
import { Frequencies } from '../src/frequencies'
import { expect } from 'chai'

describe('Frequencies', () => {
  it('should print descendingly', () => {
    const freq = new Frequencies();
    freq.add(4);
    freq.add(3);
    freq.add(3);

    expect(freq.toString()).to.equal("3:2, 4:1")

    freq.add(5)
    freq.add(5)
    freq.add(5)
    expect(freq.toString()).to.equal("5:3, 3:2, 4:1")
  })
})
