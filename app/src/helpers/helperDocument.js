export const clearBody = () => {
  document.body.innerHTML = ''
}

export const replaceBodyContentWith = (element) => {
  clearBody()
  document.body.appendChild(element)
}

export const getDomElementStyle = (domElement) => {
  return (
    domElement &&
    window.getComputedStyle(domElement)
  ) || {}
}

export const getDomElementRect = (domElement) => {
  return (
    domElement &&
    typeof domElement.getBoundingClientRect === 'function' &&
    domElement.getBoundingClientRect()
  ) || {}
}

export const addChildEventListener = (base, eventName, selector, handler) => {
  base.addEventListener(eventName, (event) => {
    if (event.target.matches(selector)) {
      // passes the event to the handler and sets `this`
      // in the handler as the target element from the event
      handler.call(event.target, event)
    }
  })
}
