import { reactive, computed } from 'vue'

function generateErrorsStructure(fields) {
  return Object.keys(fields).reduce((accum, key) => {
    return {
      ...accum,
      [key]: []
    }
  }, {})
}

function generateValuesStructure(fields) {
  return Object.entries(fields).reduce((accum, [key, { value }]) => {
    return {
      ...accum,
      [key]: value
    }
  }, {})
}

export default function useForm(fields) {
  const errors = reactive(generateErrorsStructure(fields))
  const values = reactive(generateValuesStructure(fields))

  function getChangeHandler(key) {
    return function handleChange(newVal) {
      values[key] = newVal
    }
  }

  function generateErrorsForKey(key) {
    const { validators } = fields[key]

    const newErrors = validators.map(({ checker, getMessage }) => {
      const isValid = checker(values[key], values, errors)

      if(!isValid) {
        return getMessage?.(key, values[key])
      }
    }).filter(Boolean)

    errors[key] = newErrors
  }

  function generateErrors() {
    Object.keys(fields).forEach(generateErrorsForKey)
  }

  const hasErrors = computed(() => {
    return Object.values(errors).some((list) => list.length > 0)
  })

  function getHasErrors() {
    return Object.values(errors).some((list) => list.length > 0)
  }

  return {
    values,
    errors,
    generateErrors,
    generateErrorsForKey,
    getChangeHandler,
    hasErrors,
    getHasErrors,
  }
}
