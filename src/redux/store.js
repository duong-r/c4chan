import { configureStore } from '@reduxjs/toolkit'
import messages from './messages-reducer'
export default configureStore({
  reducer: { messages }
})
