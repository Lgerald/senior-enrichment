import axios from "axios"


const GET_CAMPUS = "GET_CAMPUS"
const GET_CAMPUSES = "GET_CAMPUSES"
const EDIT_CAMPUS = "EDIT_CAMPUS"
const DELETE_CAMPUS = "DELETE_CAMPUS"




export function getCampus(campus) {
    const action = {type: GET_CAMPUS, campus}
    return action
}

export function getCampuses(campus) {
    const action = {type: GET_CAMPUSES, campus}
    return action
}

export function editCampus(campus) {
    const action = { type: EDIT_CAMPUS, campus }
    return action
}

export function deleteCampus(campus) {
    const action = { type: DELETE_CAMPUS }
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

export function postCampus(campus) {
    return function thunk (dispatch) {
        return axios.post('/api/campus', campus)
        .then(res => res.data)
        .then(newCampus => {
            const action = getCampus(newCampus)
            dispatch(action)
  
        })
        .catch(console.error)
    }
}

export function editCampusRequest(campusId, campus) {
    return function thunk(dispatch) {
        axios.put(`/api/campus/${campusId}`, campus)
            .then(res => res.data)
            .then(editedCampus => {
                const action = editCampus(editedCampus)
                dispatch(action)
            })
            .catch(console.error)
    }
}

export function deleteCampusRequest(campusId) {
    return function thunk(dispatch) {
        axios.delete(`/api/campus/${campusId}`)
            .then(res => res.data)
            .then(deletedCampus => {
                const action = deleteCampus(deletedCampus)
                dispatch(action)
            })
            .catch(console.error)
    }
}



function campusReducer(state = [], action) {
    switch(action.type) {
        case GET_CAMPUS:
            return [...state, action.campus]
        case GET_CAMPUSES:
            return action.campus
        case EDIT_CAMPUS:
            return [state.map(update => {
                if (update.id === action.campus.id) {
                    return action.campus
                }
            })]
        case DELETE_CAMPUS:
            return [state.filter(d => {
                if (d.id !== action.campus.id) {
                    return action.campus
                }
            })]  
        default:
            return state
    }
}

export default campusReducer