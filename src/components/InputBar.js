import { Button, Input, HStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createMessageThunk } from '../services/messages-thunks'

/**
 * Creates an input bar that includes an area for user text-input,
 * and a send button.
 */
const InputBar = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  /**
   * When the send button is clicked a new message
   * object is created, and createMessageThunk passes
   * the object to axios for creation/posting.
   */
  const handleClick = () => {
    const messageInput = document.getElementById('message-input')
    if (messageInput.value !== '') {
      const timestamp = new Date().getTime()
      const message = { body: text, timestamp }
      messageInput.value = ''
      dispatch(createMessageThunk(message))
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
