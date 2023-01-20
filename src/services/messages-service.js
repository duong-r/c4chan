import axios from 'axios'
const MESSAGES_API = 'http://localhost:8000/messages'

/**
 * calls axios to create new posts and store them in the database.
 */
export const createMessage = async (message) => {
  const response = await axios.post(MESSAGES_API, message)
  return response.data
}

/**
 * calls axios to fetch all messages within the database.
 */
export const findMessages = async () => {
  const response = await axios.get(MESSAGES_API)
  const messages = response.data
  return messages
}
