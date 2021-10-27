import React from 'react'
import styled from 'styled-components'

const Modal = () => {
    const [modalStatus, setModalStatue] = React.useState(false)
    return (
        <div>
            {modalStatus && <Amodal></Amodal>}
            <Btn
                onClick={() => {
                    {
                        modalStatus
                            ? setModalStatue(false)
                            : setModalStatue(true)
                    }
                }}
            ></Btn>
        </div>
    )
}

const Amodal = styled.div`
    width: 20vw;
    height: 20vw;
    position: fixed;
    top: 10rem;
    right: 50rem;
    background-color: blue;
`
const Btn = styled.button`
    width: 5rem;
    height: 5rem;
    position: fixed;
    top: 50rem;
    right: 60rem;
`

export default Modal
