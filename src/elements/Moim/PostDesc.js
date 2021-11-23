import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { history } from '../../redux/store'
import Icon from '../../components/icons/Icon'
import 'moment/locale/ko'
import moment from 'moment'
import Filter from '../../components/Filter'
import '../../styles/moim/moim-main.scss'

const PostDesc = () => {
    const post_data_all = useSelector((state) => state.moim.moim_all)
    const loginuserID = useSelector((state) => state.user.userInfo.userID)

    const dispatch = useDispatch()
    const [posts, setPosts] = useState('')
    const [renderingPost, setRenderingPost] = useState(false)

    React.useEffect(() => {
        if (post_data_all === '') {
            setPosts(post_data_all)
            setRenderingPost(false)
        }
    }, [renderingPost, posts, post_data_all])

    const handleClickLikeOrderButton = () => {
        setPosts(
            post_data_all
                .slice()
                .sort((postA, postB) => postB.Likes.length - postA.Likes.length)
        )
        setRenderingPost(true)
    }

    const handleClickLastestOrderButton = () => {
        setPosts(
            post_data_all
                .slice()
                .sort(
                    (postA, postB) =>
                        moment(postB.createdAt) - moment(postA.createdAt)
                )
        )
        setRenderingPost(true)
    }

    return (
        <>
            <div className="filters-container">
                <Filter />
                <button
                    className="latest-filter-btn filter-btn"
                    onClick={handleClickLastestOrderButton}
                >
                    최신순
                </button>
                <button
                    className="liked-filter-btn filter-btn"
                    onClick={handleClickLikeOrderButton}
                >
                    좋아요순
                </button>
            </div>
            {posts?.length > 0 &&
                posts?.map((el, idx) => (
                    <div key={idx} className="post-warp">
                        {el?.imgSrc === null ? (
                            <div
                                className="moim-post-box"
                                onClick={() => {
                                    history.push(`/moim/detail/${el?.id}`)
                                }}
                            >
                                <div className="post-info">
                                    <span className="location">
                                        <Icon
                                            icon="place"
                                            size="20px"
                                            color="#273B4A"
                                        />
                                        {el?.location?.split(' ')[0]}{' '}
                                        {el?.location?.split(' ')[1]}
                                    </span>
                                    <span className="location">
                                        <Icon
                                            icon="user-person"
                                            size="20px"
                                            color="#A5ABB0"
                                        />
                                        참여자 {el?.MoimUsers?.length}명
                                    </span>
                                </div>
                                <span className="title">{el?.title}</span>
                                <p className="content">{el?.contents}</p>
                                <div className="post-info">
                                    <span>
                                        {el?.MoimUsers[0]?.User?.nickName}
                                    </span>
                                    <span>
                                        {moment(el?.createdAt).fromNow()}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div
                                className="moim-post-box"
                                onClick={() => {
                                    history.push(`/moim/detail/${el?.id}`)
                                }}
                            >
                                <div className="post-info">
                                    <p className="location">
                                        <Icon
                                            icon="place"
                                            size="20px"
                                            color="#273B4A"
                                        />
                                        {el?.location?.split(' ')[0]}{' '}
                                        {el?.location?.split(' ')[1]}
                                    </p>
                                    <span>
                                        참여자 {el?.MoimUsers?.length}명
                                    </span>
                                </div>
                                <p className="title">{el?.title}</p>
                                <div className="imgbox">
                                    <img src={el.imgSrc} />
                                </div>
                                <div className="post-info">
                                    <span>
                                        {el?.MoimUsers[0]?.User?.nickName}
                                    </span>
                                    <span>
                                        {moment(el?.createdAt).fromNow()}
                                    </span>
                                </div>
                            </div>
                        )}
                        <div className="ectbox">
                            <div className="icon-text">
                                {el?.Likes?.findIndex(
                                    (user) => user?.userId === loginuserID
                                ) === -1 ? (
                                    <Icon
                                        icon="heart"
                                        size="20px"
                                        color="lightgray"
                                    />
                                ) : (
                                    <Icon
                                        icon="heart"
                                        size="20px"
                                        color="red"
                                    />
                                )}
                                <span>
                                    좋아요
                                    {el?.Likes?.length}개
                                </span>
                            </div>
                            <div className="icon-text">
                                <Icon
                                    icon={'message'}
                                    size="20px"
                                    color="#A5ABB0"
                                />
                                <span>댓글{el?.Comments?.length}개</span>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    )
}

export default PostDesc
