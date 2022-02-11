import { isValidEmail } from "../src/utils/email"

describe('isValidEmail', () => {
  it('valid email', () => {
    expect(isValidEmail('johndoe@gmail.com')).toBe(true)
  })

  it('invalid email', () => {
    expect(isValidEmail('johndoegmail.com')).toBe(false)
  })
})
