import { createAsyncThunk }
  from '@reduxjs/toolkit'
import * as service
  from './messages-service'

export const findMessagesThunk = createAsyncThunk(
  'messages/findMessages', async () =>
    await service.findMessages()
)
export const createMessageThunk = createAsyncThunk(
  'messages/createMessages', async (message) =>
    await service.createMessage(message)
)
