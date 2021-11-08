import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { history } from '../../redux/store'
import styled from 'styled-components'
import Icon from '../icons/Icon'

import { Text } from '../../elements/index'
import { NavBar } from '../index'
import { myMoimCreateMD } from '../../redux/async/myMoim'

const MyCreate = () => {
    const dispatch = useDispatch()
    const create_list = useSelector((state) => state.myMoim.my_moim)

    console.log(create_list)
    useEffect(() => {
        dispatch(myMoimCreateMD())
    }, [])

    return (
        <>
            {create_list?.map((i, idx) => (
                <PostBox
                    onClick={() => history.push(`/moim/detail/${i.moimId}`)}
                >
                    <TitleBox key={idx}>
                        <div>
                            <Text _align="left">{i?.Moim?.title}</Text>
                            <Text
                                _fontSize="11px"
                                _color="#8f8f8f"
                                _align="left"
                            >
                                {i?.createdAt?.split(['T'])[0]}
                            </Text>
                        </div>
                    </TitleBox>
                    <EtcBox>
                        <SmallBox>
                            <Icon icon={'favorite'} size="20px" />
                            좋아요 {(i?.Moim?.Likes).length}
                        </SmallBox>
                        <SmallBox>
                            <Icon icon={'message'} size="20px" />
                            댓글 {(i?.Moim?.Comments).length}개
                        </SmallBox>
                    </EtcBox>
                </PostBox>
            ))}
            <NavBar />
        </>
    )
}

const TitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;
`

const PostBox = styled.div`
    margin: 5vw auto;
    width: 90vw;
    height: auto;
    border: 1px solid #c4c4c4;
    position: relative;
`
const SmallBox = styled.div`
    display: flex;
    height: inherit;
    margin: 0 10px 0;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    color: #8f8f8f;
`

const EtcBox = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
    width: 90vw;
    height: 45px;
    border-bottom: 1px solid lightgray;
    border-top: 1px solid lightgray;
`

export default MyCreate
