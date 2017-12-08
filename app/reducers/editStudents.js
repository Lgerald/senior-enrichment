import axios from 'axios'


const EDIT_STUDENT = "EDIT_STUDENT"
const DELETE_STUDENT = "DELETE_STUDENT"

export function editStudent(student) {
    const action = {type: EDIT_STUDENT, student}
    return action
}

export function deleteStudent(student) {
    const action = { type: DELETE_STUDENT }
    return action
}

export function editStudentRequest(studentId, student) {
    return function thunk(dispatch) {
        axios.put(`/api/students/${studentId}`, student)
        .then(res => res.data)
        .then(editedStudent => {
            const action = editStudent(editedStudent)
            dispatch(action)
            history.push(`${editedStudent.id}`)
        })
        .catch(console.error)
    }
}

export function deleteStudentRequest(studentId, student) {
    return function thunk(dispatch) {
        axios.delete(`/api/students/${studentId}`, student)
        .then(res => res.data)
        .then(deletedStudent => {
            const action = deleteStudent(deletedStudent)
            dispatch(action)
        })
        .catch(console.error)
    }
}

function editedStudentReducer(state = [], action) {
    switch(action.type) {
        case EDIT_STUDENT:
            return [state.map(update => {
                if (update.id === action.student.id) {
                    return action.student
                }
            })]
        
        case DELETE_STUDENT:
            return [state.filter(d => {
                if(d.id !== action.student.id) {
                    return action.student
                }
            })]
        default:
            return state
    }

}

export default editedStudentReducer