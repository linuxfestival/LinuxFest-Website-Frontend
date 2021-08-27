import persianRex from 'persian-rex'
import {
  helpers,
} from 'vuelidate/lib/validators'

export const PERSIAN_PHONE_REGEX = /^(\+98?)?{?(0?9[0-9]{9,9}}?)$/gm
export const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/

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

export const validateIf = (prop, validator) => helpers.withParams(
  { type: 'validatedIf', prop },
  function (value, parentVm) {
    return helpers.ref(prop, this, parentVm) ? validator(value) : true
  }
)
