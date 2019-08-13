import axios from 'axios';

export const login = ({ username, password }) => {
    return async function (dispatch) {
        var result = await axios.post('https://blooming-stream-45371.herokuapp.com/api/v2/people/authenticate',
            {
                email: username,
                password: password
            });
        dispatch({
            type: 'LOGIN',
            payload: result.data
        })
    }
}

export const signup = ({ password, username, displayName }) => {
    return async function (dispatch) {
        var result = await axios.post('https://blooming-stream-45371.herokuapp.com/api/v2/people/create',
            {
                display_name: displayName,
                password: password,
                email: username
            });
        dispatch({
            type: 'SIGNUP_COMPLTED'
        })
    }
}