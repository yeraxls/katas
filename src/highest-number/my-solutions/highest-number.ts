export class EmptyArrayError extends Error {
  constructor() {
    super('al menos uno es requerido')
  }
}
export function getHighestNumber(numbers: number[]): number {
  if (numbers.length === 0) throw new EmptyArrayError()
  return [...numbers]
    .slice()
    .sort((a: number, b: number) => a - b)
    .reverse()[0]
}
