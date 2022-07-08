import { ref } from 'vue'

function generateErrorMessage() {
  return 'خطایی هنگام دریافت اطلاعات رخ داد.'
}

export default function useHttp(request) {
  const isLoading = ref(false)
  const data = ref(null)
  const errorMessage = ref(null)

  async function execute(...args) {
    isLoading.value = true
    return request(...args)
      .then(responseData => {
        data.value = responseData
        isLoading.value = false

        return responseData
      })
      .catch((e) => {
        errorMessage.value = generateErrorMessage(e)
        isLoading.value = false

        throw e
      })
  }

  return {
    isLoading,
    errorMessage,
    data,
    execute
  }

}
