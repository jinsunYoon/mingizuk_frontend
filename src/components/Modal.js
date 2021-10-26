import React from 'react'

const Modal = () => {
    const [modalStatus, setModalStatue] = React.useState(false)
    return (
        <div>
            {modalStatus && (
                <div
                    style={{
                        width: '20vw',
                        height: '20vw',
                        backgroundColor: 'blue',
                        position: 'fixed',
                        top: 0,
                        right: '50rem',
                    }}
                ></div>
            )}
            <button
                style={{
                    width: '5rem',
                    height: '5rem',
                    position: 'fixed',
                    top: '50rem',
                    right: '60rem',
                }}
                onClick={() => {
                    {
                        modalStatus
                            ? setModalStatue(false)
                            : setModalStatue(true)
                    }
                }}
            ></button>
        </div>
    )
}

export default Modal
