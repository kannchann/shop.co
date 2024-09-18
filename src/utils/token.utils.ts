export function getToken () {
    return localStorage.getItem('token')
}

export function setToken(value:string) {
    return localStorage.setItem('token',value)
}

export function removeToken () {
    return localStorage.removeItem('token')
}
