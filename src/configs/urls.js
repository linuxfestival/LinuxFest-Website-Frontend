import { getEnv } from '@/utils/env-utils';

const DEFAULT_BASE_URL = 'http://linuxfest.aut.ac.ir'

const BASE_URL = getEnv('VUE_APP_BASE_URL') || DEFAULT_BASE_URL;
export const apiGateway = `${BASE_URL}/api`;
