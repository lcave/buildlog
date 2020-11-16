import './login'

window.addEventListener('storage', this.syncLogout) 

export async function logout() {
    inMemoryToken = null;
    const url = 'http://localhost:3010/auth/logout'
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'include',
    })
    // to support logging out from all windows
    window.localStorage.setItem('logout', Date.now())
}

syncLogout = e => {
    if (e.key === 'logout') {
        console.log('logged out from storage!')
        Router.push('/login')
    }
}