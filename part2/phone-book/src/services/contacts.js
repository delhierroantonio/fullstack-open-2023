import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const createNote = (contactObj) => {
  const request = axios.post(baseUrl, contactObj)
  return request.then(res => res.data)
}

const deleteNote = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(res => res.data)
}

const updateContact = (id, contactObj) => {
  const request = axios.put(`${baseUrl}/${id}`, contactObj)
  return request.then(res => res.data)
}

export default { createNote, deleteNote, updateContact }
