import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findMessagesThunk } from '../services/messages-thunks'

const MessageBoard = () => {
  const { messages, loading } = useSelector((state) => state.messagesData)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findMessagesThunk())
  }, [])
  const sortedMessages = []

  // Sort recieved messages in a new array
  messages.map((m) => {
    return sortedMessages.push({ body: m.body, timestamp: m.timestamp })
  })
  sortedMessages.sort((m1, m2) => {
    return m2.timestamp - m1.timestamp
  })

  return (
    <div>
      { loading && <div className='loading-item'>Loading...</div> }
      { sortedMessages.map((message) => (
        <div className="message-block" key={message.id}>
          <p className="message-body">{message.body}</p>
          <p className="message-time">
            {new Date(message.timestamp).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  )
}

export default MessageBoard
