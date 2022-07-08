export const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const FARSI_REGEX = /^[\u0600-\u06FF\s]+$/;
export const PERSIAN_PHONE_REGEX = /^(\+98?)?{?(0?9[0-9]{9,9}}?)$/gm

export function isPrimitiveEmpty(val) {
  return val === null || val === undefined || val === ''
}

export function isArray(val) {
  return Array.isArray(val)
}

export function isPresent(val) {
  return !isPrimitiveEmpty(val) && val.length > 0;
}

export function isEmail(val) {
  return Boolean(EMAIL_REGEX.test(val))
}

export function hasMinLength(val, length) {
  return val && val.length >= length
}

export function isFarsi(val) {
  return val && FARSI_REGEX.test(val)
}

export function isPhoneNumber(val) {
  return val && PERSIAN_PHONE_REGEX.test(val)
}
