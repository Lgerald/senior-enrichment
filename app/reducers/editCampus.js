import axios from 'axios'


const EDIT_CAMPUS = "EDIT_CAMPUS"


export function editCampus(campus) {
    const action = { type: EDIT_CAMPUS, campus }
    return action
}


export function editCampusRequest(campusId, campus) {
    return function thunk(dispatch) {
        axios.put(`/api/campus/${campusId}`, campus)
            .then(res => res.data)
            .then(editedCampus => {
                const action = editCampus(editedCampus)//need a edit action jk cant just get it
                // could use own props to get id match,.params.id instead

                dispatch(action)
                history.push(`${editedCampus.id}`)
            })
            .catch(console.error)
    }
}

function editCampusReducer(state = [], action) {
    switch(action.type) {
        case EDIT_CAMPUS:
            return [state.map(update => {
                if (update.id === action.campus.id) {
                    return action.campus
                }
            })]
        default:
            return state
    }
}

export default editCampusReducer