import { describe, it, expect } from 'vitest'
import { EmptyArrayError, getHighestNumber } from './highest-number'

describe('highest-number', () => {
  it('retorna el num de mayor valor', (): void => {
    const given: number[] = [256]
    const actual = getHighestNumber(given)
    expect(actual).toBe(256)
  })

  it('retorna el num de mayor valor entre varios', (): void => {
    const given: number[] = [1, 2, 3]
    const actual = getHighestNumber(given)
    expect(actual).toBe(3)
  })

  it('should an array of negative numbers', (): void => {
    const given: number[] = [-3, -2, -1]
    const actual = getHighestNumber(given)
    expect(actual).toBe(-1)
  })

  it('should an array without numbers', (): void => {
    const given: number[] = []
    expect(() => getHighestNumber(given)).toThrowError(new EmptyArrayError())
  })
})
