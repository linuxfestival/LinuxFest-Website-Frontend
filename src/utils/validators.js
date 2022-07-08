export const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

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
