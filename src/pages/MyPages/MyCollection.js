import React from 'react'

//* components
import { CollectionList } from '../../components/index'

// *styles
import '../../styles/mypage/mypage.scss'

const MyCollection = () => {
    return (
        <>
            <section className="contents">
                <CollectionList />
                <CollectionList />
                <CollectionList />
            </section>
        </>
    )
}

export default MyCollection
