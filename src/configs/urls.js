import { getEnv } from '@/utils/env-utils'

const DEFAULT_BASE_URL = 'http://autlinuxfest.ir'
export const BASE_URL = getEnv('VUE_APP_BASE_URL') || DEFAULT_BASE_URL

export const API = `${BASE_URL}/api`
