import http from '@/services/http'
import { API } from '@/configs/urls'

const config = {
  withToken: true,
}

function transformPaymentResult({
  data: {
    status,
  },
}) {
  return status
}

export function verifyPayment({
  orderId,
  amount,
  authority,
}) {
  const url = `${API}/users/verifyPayment?order_id=${orderId}&Authority=${authority}&amount=${amount}`
  return http.get(url, config).then(transformPaymentResult)
}
