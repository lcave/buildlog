import jwt_decode from 'jwt-decode'

let inMemoryToken;

export function login(jwt_token, noRedirect) {
    inMemoryToken = {
        token: jwt_token,
        expiry: jwt_decode(jwt_token).exp
    };
    if (!noRedirect) {
        //Router.push('/app')
    }
}