const apiRoute = 'http://localhost:3000/api/v1'

export const getScreenShot = (pageData, elemData) => {
  const body = JSON.stringify({
    pageData,
    elemData
  })

  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  return fetch(`${apiRoute}/screenshot`, {
    method: 'POST',
    headers,
    body
  })
}
