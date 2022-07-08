export function generateErrorMessage({ response: {
  data: {
    error,
    message,
  } = {}
} = {} } = {}) {
  return error || message || 'خطایی هنگام ارتباط با سرور رخداد';
}
