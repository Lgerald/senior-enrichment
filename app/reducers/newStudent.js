import axios from "axios"

const NEW_STUDENT = "NEW_STUDENT"

export function newStudent(student) {
    const action = { type: NEW_STUDENT, student }
    return action
}

function newStudentReducer(state = "", action) {
    switch(action.type) {
        case NEW_STUDENT:
            return action.student
        default:
            return state
    }
}

export default newStudentReducer