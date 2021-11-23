import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { history } from '../../redux/store'

import Icon from '../icons/Icon'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

import { NavBar } from '../index'
import { myMoimJoinMD } from '../../redux/async/myMoim'

const MyJoin = () => {
    const dispatch = useDispatch()
    const join_list = useSelector((state) => state.myMoim.my_join)
    console.log('>>>', 'join', join_list)
    React.useEffect(() => {
        dispatch(myMoimJoinMD())
    }, [])

    return (
        <>
            <section className="mymoim-contents">
                {join_list?.map((i, idx) => (
                    <div
                        className="postbox"
                        onClick={() => {
                            history.push(`/moim/detail/${i?.moimId}`)
                        }}
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
                            </div>

                            <div className="etcbox">
                                <div>
                                    <span className="writer">
                                        작성자{' '}
                                        {i?.Moim.MoimUsers[0]?.User?.nickName}
                                    </span>
                                    <span className="date">
                                        {i?.Moim?.createdAt?.split(['T'])[0]}
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

export default MyJoin
