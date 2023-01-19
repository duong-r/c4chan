import { createSlice } from '@reduxjs/toolkit'
const initialMessages = [
  { body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum et leo fermentum bibendum. Quisque quis cursus ligula. Pra', timestamp: 39949418181 },
  { body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum et leo fermentum bibendum. Quisque quis cursus ligula. Pra', timestamp: 1245243321488 },
  { body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum et leo fermentum bibendum. Quisque quis cursus ligula. Pra', timestamp: 323249419414 }
]
export const messagesSlice = createSlice({
  name: 'messages',
  initialState: initialMessages,
  reducers: {
    addMessage (state, action) {
      state.push({
        body: action.payload.body,
        timestamp: action.payload.timestamp
      })
    }
  }
})

// Action creators are generated for each case reducer function
export const { addMessage } = messagesSlice.actions
export default messagesSlice.reducer
