import axios from "axios"


const GET_STUDENT = "GET_STUDENT"
const GET_STUDENTS = "GET_STUDENTS"

export function getStudent(student) {
    const action = {type: GET_STUDENT, student}
    return action
}

export function getStudents(students) {
    const action = {type: GET_STUDENTS, students}
    return action
}

export function fetchStudents() {
    return function thunk(dispatch) {
        return axios.get('/api/student')
        .then(res => res.data)
        .then(students => {
            const action = getStudents(students)
            dispatch(action)
        })
        .catch(console.error)
    }
}

export function postStudent(student, history){
    return function thunk(dispatch) {
        axios.post('/api/student', student)
        .then(res => res.data)
        .then(newStudent => {
            const action = getStudent(newStudent)
            dispatch(action)
            history.push(`${newStudent.id}`)
        }) 
        .catch(console.error)
    }
}

function studentsReducer(state = [], action) {
    switch(action.type) {
        case GET_STUDENT:
            return [...state.students, action.student]
        case GET_STUDENTS:
            return action.students
        default:
            return state
    }
}

export default studentsReducer