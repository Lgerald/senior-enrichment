
export const NEW_CAMPUS = "NEW_CAMPUS"

export function newCampus(newCampus) {
    const action = { type: NEW_CAMPUS, newCampus }
    return action
}


function newCampusReducer(state = "", action) {
    switch(action.type) {
        case NEW_CAMPUS:
            return action.newCampus
        default:
            return state
    }
}

export default newCampusReducer