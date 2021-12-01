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

const toast = (timer, progressbar, icon, title) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: timer,
        timerProgressBar: progressbar,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
    })

    Toast.fire({
        icon: icon,
        title: title,
    })
}

export { getToken, toast }
