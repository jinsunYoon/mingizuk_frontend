import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { history } from '../../redux/store'
import Icon from '../icons/Icon'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

import { NavBar } from '../index'
import { myMoimCreateMD } from '../../redux/async/myMoim'

const MyCreatedMoims = () => {
    const dispatch = useDispatch()
    const create_list = useSelector((state) => state.myMoim.my_moim)

    console.log('><', create_list)
    useEffect(() => {
        dispatch(myMoimCreateMD())
    }, [])

    return (
        <>
            <section className="mymoim-contents">
                {create_list?.map((i, idx) => (
                    <div
                        className="postbox"
                        onClick={() => history.push(`/moim/detail/${i.moimId}`)}
                        key={idx}
                    >
                        <div className="contentsbox">
                            <span className="location">
                                <Icon
                                    icon="place"
                                    size="20px"
                                    color="#6B76FF"
                                />
                                {i?.Moim?.location?.split(' ')[0]}{' '}
                                {i?.Moim?.location?.split(' ')[1]}{' '}
                                {i?.Moim?.location?.split(' ')[2]}
                            </span>
                            <div className="titlebox">
                                <span className="title">{i?.Moim?.title}</span>
                                <div class="etcbox">
                                    <div>
                                        <span className="date">
                                            {
                                                i?.Moim?.createdAt?.split([
                                                    'T',
                                                ])[0]
                                            }
                                        </span>
                                    </div>
                                    <span className="join">
                                        <Icon
                                            icon="user-person"
                                            size="20px"
                                            color="#A5ABB0"
                                        />
                                        {i?.Moim?.MoimUsers?.length}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="commentbox">
                            <div>
                                <FavoriteBorderIcon />
                                좋아요 {(i?.Moim?.Likes).length}
                            </div>
                            <div>
                                <ChatBubbleOutlineIcon />
                                댓글 {(i?.Moim?.Comments).length}개
                            </div>
                        </div>
                    </div>
                ))}
                <NavBar />
            </section>
        </>
    )
}

export default MyCreatedMoims
