import { Button, Input, HStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../redux/messages-reducer'

const InputBar = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleClick = () => {
    const messageInput = document.getElementById('message-input')
    if (messageInput.value !== '') {
      const timestamp = new Date().getTime()
      const message = { body: text, timestamp }
      messageInput.value = ''

      dispatch(addMessage(message))

    //   fetch("http://localhost:8000/messages", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(message),
    //   }).then(() => {
    //     console.log("new message added");
    //   });
    }
  }

  return (
    <HStack>
      <Input
        id="message-input"
        placeholder="Any thoughts?"
        maxLength={128}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={handleClick} colorScheme="teal" size="md">
        Send
      </Button>
    </HStack>
  )
}

export default InputBar

//   const [text, setText] = useState("");

//   const handleClick = () => {
//     const messageInput = document.getElementById("message-input");
//     if (messageInput.value !== "") {
//       const timestamp = new Date().getTime();
//       const message = { body: text, timestamp };
//       messageInput.value = "";

//       fetch("http://localhost:8000/messages", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(message),
//       }).then(() => {
//         console.log("new message added");
//       });
//     }
//   };
