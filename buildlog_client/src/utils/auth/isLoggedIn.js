const jwt_token = inMemoryToken;
if (!jwt_token) {
    Router.push('/login')
}
return jwt_token