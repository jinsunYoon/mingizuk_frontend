const getToken = () => {
    const accessToken = sessionStorage.getItem('accessToken')
    const refreshToken = sessionStorage.getItem('refreshToken')
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
