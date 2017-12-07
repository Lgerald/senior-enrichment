import axios from "axios"


const GET_CAMPUS = "GET_CAMPUS"
const GET_CAMPUSES = "GET_CAMPUSES"
// const EDIT_CAMPUS = "EDIT_CAMPUS"



export function getCampus(campus) {
    const action = {type: GET_CAMPUS, campus}
    return action
}

export function getCampuses(campuses) {
    const action = {type: GET_CAMPUSES, campuses}
    return action
}

// export function editCampus(campus) {
//     const action = {type: EDIT_CAMPUS, campus}
//     return action
// }

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

export function editCampusRequest(campus) {
    return function thunk(dispatch) {
    axios.put(`/api/campus/${campusId}`, campus)
    .then(res => res.data)
    .then(editedCampus => {
        const action = getCampus(editedCampus)
        dispatch(action)
        history.push(`${editedCampus.id}`)
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
        // case EDIT_CAMPUS:
        //     return [...state.campuses, action.campus]
        default:
            return state
    }
}

export default campusReducer