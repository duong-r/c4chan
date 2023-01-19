import { React } from 'react'
import { useSelector } from 'react-redux'

const MessageBoard = () => {
  const messages = useSelector((state) => state.messages)
  //   const sortedMessages = messages.sort((m1, m2) => {
  //     return m2.timestamp - m1.timestamp
  //   })
  const messages2 = []

  messages.map((m) => {
    return messages2.push({ body: m.body, timestamp: m.timestamp })
  })
  messages2.sort((m1, m2) => {
    return m2.timestamp - m1.timestamp
  })

  return (
    <div>
      {messages2.map((message) => (
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
