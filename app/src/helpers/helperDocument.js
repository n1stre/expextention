export const clearBody = () => {
  document.body.innerHTML = ''
}

export const replaceBodyContentWith = (element) => {
  clearBody()
  document.body.appendChild(element)
}
