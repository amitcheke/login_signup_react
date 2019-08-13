import { combineReducers } from 'redux';

const initialStateForAuth = {
    authentication_token: '',
    person: {}
}

export const authReducer = (state = initialStateForAuth, action) => {
    switch (action.type) {
        case 'LOGIN':
            var result = Object.assign({}, state, { authentication_token: action.payload.authentication_token, person: action.payload.person });
            return result;
        default:
            return state;
    }
}

export default combineReducers({
    authData: authReducer
})