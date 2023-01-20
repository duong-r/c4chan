import { configureStore } from '@reduxjs/toolkit'
import messagesReducer from './messages-reducer'

/**
 * Stores states that should be available between components
 * and allows reliant components to use the most recent data.
 */
export default configureStore({
  reducer: { messagesData: messagesReducer }
})
