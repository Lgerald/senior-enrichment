/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import campus from './campus'
import students from './students'
import newStudent from './newStudent'
import newCampus from './newCampus'

const initialState = {}

const rootReducer = combineReducers({
  campus, students, newStudent, newCampus
})



export default rootReducer
