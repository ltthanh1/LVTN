import actionTypes from './actionTypes'
import { apiRegister, apiLogin } from '../../services/auth'

export const register = (payload) => async (dispacth) => {
    try {
        const response = await apiRegister(payload)
        if (response?.data.err === 0) {
            dispacth({
                type: actionTypes.REGISTER_SUCCESS,
                data: response.data.token
            })
        } else {
            dispacth({
                type: actionTypes.REGISTER_FAIL,
                data: response.data.message
            })
        }
    } catch (error) {
        dispacth({
            type: actionTypes.REGISTER_FAIL,
            data: null
        })
    }
}
export const login = (payload) => async (dispacth) => {
    try {
        const response = await apiLogin(payload)
        if (response?.data.err === 0) {
            dispacth({
                type: actionTypes.LOGIN_SUCCESS,
                data: response.data.token
            })
        } else {
            dispacth({
                type: actionTypes.LOGIN_FAIL,
                data: response.data.message
            })
        }
    } catch (error) {
        dispacth({
            type: actionTypes.LOGIN_FAIL,
            data: null
        })
    }
}

export const logout = () => ({
    type: actionTypes.LOGOUT
})