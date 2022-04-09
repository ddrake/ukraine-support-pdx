read = () => {
  return fetch('http://localhost:8888/.netlify/functions/get-mapid')
    .then((response) => {
      return response.json()
    })
}

export default {
  read: read,
}
