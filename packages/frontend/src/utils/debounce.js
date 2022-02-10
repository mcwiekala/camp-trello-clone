export const debounce = (func) => {
  let timer
  return (args) => {
    clearTimeout(timer)
    timer = setTimeout(() => func(args), 300)
  }
}
