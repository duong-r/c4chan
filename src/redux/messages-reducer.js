import { createSlice } from '@reduxjs/toolkit'
import { createMessageThunk, findMessagesThunk } from '../services/messages-thunks'

/**
 * messages are initially empty, and is then populated with data from
 * the messages table in db.json.
 *
 * manages the loading state of messages that are being brought
 * in from the db.
 */
const initialState = {
  messages: [],
  loading: false
}

/**
 * Slice is used to maintain the state of
 * messages.
 */
export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  extraReducers: {
    [findMessagesThunk.pending]:
      (state) => {
        state.loading = true
        state.messages = []
      },
    [findMessagesThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.messages = payload
      },
    [findMessagesThunk.rejected]:
      (state) => {
        state.loading = false
      },
    [createMessageThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.messages.push(payload)
      }
  }
})

// Action creators are generated for each case reducer function
export const { addMessage } = messagesSlice.actions
export default messagesSlice.reducer
