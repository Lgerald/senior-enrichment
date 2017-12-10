import axios from "axios"


const GET_STUDENT = "GET_STUDENT"
const GET_STUDENTS = "GET_STUDENTS"
const EDIT_STUDENT = "EDIT_STUDENT"
const DELETE_STUDENT = "DELETE_STUDENT"


export function getStudent(student) {
    const action = {type: GET_STUDENT, student}
    return action
}

export function getStudents(students) {
    const action = {type: GET_STUDENTS, students}
    return action
}

export function editStudent(student) {
    const action = { type: EDIT_STUDENT, student }
    return action
}

export function deleteStudent(student) {
    const action = { type: DELETE_STUDENT }
    return action
}


export function fetchStudents() {
    return function thunk(dispatch) {
        return axios.get('/api/students')
        .then(res => res.data)
        .then(students => {
            const action = getStudents(students)
            dispatch(action)
        })
        .catch(console.error)
    }
}

export function postStudent(student){
    return function thunk(dispatch) {
        return axios.post('/api/students', student)
        .then(res => res.data)
        .then(newStudent => {
            const action = getStudent(newStudent)
            dispatch(action)

        }) 
        .catch(console.error)
    }
}

export function editStudentRequest(studentId, student) {
    return function thunk(dispatch) {
        return axios.put(`/api/students/${studentId}`, student)
            .then(res => res.data)
            .then(editedStudent => {
                const action = editStudent(editedStudent)
                dispatch(action)
                //history.push(`${editedStudent.id}`)
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


function studentsReducer(state = [], action) {
    switch(action.type) {
        case GET_STUDENT:
            return [...state, action.student]
        case GET_STUDENTS:
            return action.students
        case EDIT_STUDENT:
            return [state.map(update => {
                if (update.id === action.student.id) {
                    return action.student
                }
            })]

        case DELETE_STUDENT:
            return [state.filter(d => {
                if (d.id !== action.student.id) {
                    return action.student
                }
            })]
        default:
            return state
    }
}

export default studentsReducer