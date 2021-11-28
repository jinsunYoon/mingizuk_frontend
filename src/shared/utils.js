const getToken = () => {
    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')
    if (accessToken) {
        let tokens = {
            accessToken: `Bearer ${accessToken}`,
            refreshToken: `Bearer ${refreshToken}`,
        }
        return tokens
    }

    return null
}

export { getToken }
