import { describe, expect, it } from 'vitest'
import { suma } from './suma'

describe('suma', () => {
  it('debe sumar dos números correctamente', () => {
    expect(suma(2, 3)).toBe(5)
  })
})
