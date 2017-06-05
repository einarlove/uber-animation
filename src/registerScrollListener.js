export default (callback, element = window) => {
  if (!requestAnimationFrame) {
    element.addEventListener('scroll', callback)
    return
  }

  let previousOffset = -1

  function loop() {
    requestAnimationFrame(loop)
    const offset = element.pageYOffset || element.scrollTop
    if (previousOffset !== offset) {
      callback()
      previousOffset = offset
    }
  }

  requestAnimationFrame(loop)
}
