import persianRex from 'persian-rex'
import {
  helpers,
} from 'vuelidate/lib/validators'

import { PERSIAN_PHONE_REGEX, PASSWORD_REGEX } from './constants'

export const isPhoneValid = helpers.regex(
  'persianPhoneValidator',
  PERSIAN_PHONE_REGEX,
)
export const isPasswordValid = helpers.regex(
  'passwordRegexValidator',
  PASSWORD_REGEX,
)

export function isPersian(string) {
  return string.trim().split(' ').every((char) => persianRex.letter.test(char))
}
