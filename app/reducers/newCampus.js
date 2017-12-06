// import axios from "./axios"

export const NEW_CAMPUS = "NEW_CAMPUS"

export function newCampus(campus) {
    const action = { type: NEW_CAMPUS, campus }
}


function newCampusReducer(state = "", action) {
    switch(action.type) {
        case NEW_CAMPUS:
            return action.campus
        default:
            return state
    }
}

export default newCampusReducer