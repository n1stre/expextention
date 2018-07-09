import { curry, apply } from 'ramda'

const debounce_ = curry((immediate, timeMs, fn) => {
  let timeout

  return (...args) => {
    const later = () => {
      timeout = null

      if (!immediate) {
        apply(fn, args)
      }
    }

    const callNow = immediate && !timeout

    clearTimeout(timeout)
    timeout = setTimeout(later, timeMs)

    if (callNow) {
      apply(fn, args)
    }

    return timeout
  }
})

export const debounceImmediate = debounce_(true)
export const debounce = debounce_(false)
