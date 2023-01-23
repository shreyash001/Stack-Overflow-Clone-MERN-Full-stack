import * as api from '../api'
import { setCurrentUser } from './currentUser'


export const signup = (authdata, navigate) => async(dispatch) => {
    try {
        const { data } = await api.signUp(authdata)
        dispatch({type: 'AUTH', data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}
export const login = (authdata,navigate) => async(dispatch) => {
    try {
        const { data } = await api.logIn(authdata)
        dispatch({type: 'AUTH', data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}
