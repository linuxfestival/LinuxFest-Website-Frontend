export function generatePath(pathStr, params = {}) {
    return Object.entries(params).reduce((accum, [key, value]) => {
        return accum.replace(`:${key}`, value)
    }, pathStr)
}