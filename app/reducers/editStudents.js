import axios from 'axios'


const EDIT_STUDENT = "EDIT_STUDENT"

export function editStudent(student) {
    const action = {type: EDIT_STUDENT, student}
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

function editedStudentReducer(state = [], action) {
    switch(action.type) {
        case EDIT_STUDENT:
            return [state.map(update => {
                if (update.id === action.student.id) {
                    return action.student
                }
            })]
        default:
            return state
    }

}

export default editedStudentReducer