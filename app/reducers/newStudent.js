

const NEW_STUDENT = "NEW_STUDENT"

export function newStudent(newStudent) {
    const action = { type: NEW_STUDENT, newStudent }
    return action
}

function newStudentReducer(state = "", action) {
    switch(action.type) {
        case NEW_STUDENT:
            return action.newStudent
        default:
            return state
    }
}

export default newStudentReducer