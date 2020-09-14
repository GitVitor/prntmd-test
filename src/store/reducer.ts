import { combineReducers } from 'redux'
import todos from './modules/todos/reducer'

const rootReducer = combineReducers({
  todos,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
