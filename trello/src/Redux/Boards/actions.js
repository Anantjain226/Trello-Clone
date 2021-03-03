import axios from 'axios'
import { GET_PERSONALBOARDS_FAILURE, GET_PERSONALBOARDS_REQUEST, GET_PERSONALBOARDS_SUCCESS } from './actionTypes'


export const getPersonalBoardsRequest = (payload) =>{
    return{
        type: GET_PERSONALBOARDS_REQUEST,
        payload
    }
}

export const getPersonalBoardsSuccess = (payload) =>{
    return{
        type: GET_PERSONALBOARDS_SUCCESS,
        payload
    }
}

export const getPersonalBoardsFailure = (payload) =>{
    return{
        type: GET_PERSONALBOARDS_FAILURE,
        payload
    }
}

export const getPersonalBoards = () => dispatch => {
    dispatch(getPersonalBoardsRequest())

    let config = {
        method: "GET",
        url: "http://localhost:3004/data"
    }

    return axios(config)
    .then(res => {
        dispatch(getPersonalBoardsSuccess(res.data))
    })
    .catch(err => {
        console.log(err)
        dispatch(getPersonalBoardsFailure())
    })
}