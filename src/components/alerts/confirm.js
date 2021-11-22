import React from 'react'

const confirm = (props) => {
    const { message, action } = props
    return (
        <>
            <div className="">
                <h3>{message}</h3>
                <div>
                    <button>취소</button>
                    <button>{action}</button>
                </div>
            </div>
        </>
    )
}

export default confirm
