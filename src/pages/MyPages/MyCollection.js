import React, { Component, useState } from 'react'

//* components
import { Header, NavBar, CollectionList } from '../../components/index'

// *styles
import '../../styles/mypage/mypage.scss'

const MyCollection = () => {
    return (
        <>
            <Header name="마이콜렉션" />
            <section className="contents">
                <CollectionList />
                <CollectionList />
                <CollectionList />
            </section>
            <NavBar />
        </>
    )
}

export default MyCollection
