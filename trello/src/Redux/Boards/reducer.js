import { GET_PERSONALBOARDS_FAILURE, GET_PERSONALBOARDS_REQUEST, GET_PERSONALBOARDS_SUCCESS } from "./actionTypes"


const initState = {
    boards: []
}

export const reducer = (state = initState, {type, payload}) => {
    switch(type){
        case GET_PERSONALBOARDS_SUCCESS:
            console.log(payload)
            console.log(state)
            return{
                ...state,
                boards: payload
            }
        default:
            return state
    }
}