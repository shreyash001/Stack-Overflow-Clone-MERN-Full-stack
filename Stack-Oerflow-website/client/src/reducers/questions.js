const questionsReducer = (state = { data:null}, action) => {
    switch (action.type) {
        case "POST_QUESTION":
            return {...state, data: action.payload}
        default:
            return state
    }
}

export default questionsReducer 