import axios from "axios"


const GET_CAMPUS = "GET_CAMPUS"
const GET_CAMPUSES = "GET_CAMPUSES"




export function getCampus(campus) {
    const action = {type: GET_CAMPUS, campus}
    return action
}

export function getCampuses(campuses) {
    const action = {type: GET_CAMPUSES, campuses}
    return action
}



export function fetchCampuses() {
    return function thunk(dispatch) {
        return axios.get('/api/campus')
        .then(res => res.data)
        .then(campuses => {
            const action = getCampuses(campuses)
            dispatch(action)
        })
        .catch(console.error)
    }
}

export function postCampus(campus, history) {
    return function thunk (dispatch) {
        axios.post('/api/campus', campus)
        .then(res => res.data)
        .then(newCampus => {
            const action = getCampus(newCampus)
            dispatch(action)
            history.push(`${newCampus.id}`)
        })
        .catch(console.error)
    }
}





function campusReducer(state = [], action) {
    switch(action.type) {
        case GET_CAMPUS:
            return [...state.campuses, action.campus]
        case GET_CAMPUSES:
            return action.campuses

        default:
            return state
    }
}

export default campusReducer