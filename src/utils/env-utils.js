export function getEnv(key) {
  const {
    env
  } = process

  return env[key];
}
