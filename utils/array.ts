export const justOne = <T>(item: Array<T> | T): T => {
  if (Array.isArray(item)) {
    return item[0]
  }
  return item
}