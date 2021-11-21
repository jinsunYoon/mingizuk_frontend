import React from 'react'
import { useSelector } from 'react-redux'
import { history } from '../../redux/store'
import Icon from '../../components/icons/Icon'
import 'moment/locale/ko'
import moment from 'moment'
import Filter from '../../components/Filter'
import { queryGet } from '../../shared/api'

const PostDesc = () => {
    const usePostListQuery = () => {
        return queryGet('POST_LIST_ALL', '/api/moims')
    }

    const { data } = usePostListQuery()
    const post_data_all = data?.allMoims
    const loginuserID = useSelector((state) => state.user.userInfo.userID)

    return (
        <>
            <div>
                <Filter />
                <div>
                    <button>좋아요순</button>
                    <button>이름순</button>
                    <button>최신순</button>
                </div>
            </div>
            {post_data_all?.length > 0 &&
                post_data_all?.map((data, idx) => (
                    <div key={idx} className="post-warp">
                        {data?.imgSrc === null ? (
                            <div
                                className="moim-post-box"
                                onClick={() => {
                                    history.push(`/moim/detail/${data?.id}`)
                                }}
                            >
                                <div className="post-info">
                                    <span className="location">
                                        {data?.location?.split(' ')[0]}{' '}
                                        {data?.location?.split(' ')[1]}
                                    </span>
                                    <span className="moimuser">
                                        참여자 {data?.MoimUsers?.length}명
                                    </span>
                                </div>
                                <span className="title">{data?.title}</span>
                                <p className="content">{data?.contents}</p>
                                <div className="post-info">
                                    <span>
                                        {data?.MoimUsers[0]?.User?.nickName}
                                    </span>
                                    <span>
                                        {moment(data?.createdAt).fromNow()}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div
                                className="moim-post-box"
                                onClick={() => {
                                    history.push(`/moim/detail/${data?.id}`)
                                }}
                            >
                                <div className="post-info">
                                    <p className="location">
                                        {data?.location?.split(' ')[0]}{' '}
                                        {data?.location?.split(' ')[1]}
                                    </p>
                                    <span>
                                        참여자 {data?.MoimUsers?.length}명,{' '}
                                        {moment(data?.createdAt).fromNow()}
                                    </span>
                                </div>
                                <p className="title">{data?.title}</p>
                                <div className="imgbox">
                                    <img src={data.imgSrc} />
                                </div>
                                <div className="post-info">
                                    <span>
                                        {data?.MoimUsers[0]?.User?.nickName}
                                    </span>
                                    {/* <span>
                                        {moment(data?.createdAt).fromNow()}
                                    </span> */}
                                </div>
                            </div>
                        )}
                        <div className="ectbox">
                            <div className="icon-text">
                                {data?.Likes?.findIndex(
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
                                        color="#FD8787"
                                    />
                                )}
                                <span style={{ marginLeft: '0.5rem' }}>
                                    좋아요
                                    {data?.Likes?.length}개
                                </span>
                            </div>
                            <div className="icon-text">
                                <Icon
                                    icon={'message'}
                                    size="26px"
                                    color="#A5ABB0"
                                />
                                <span style={{ marginLeft: '0.2rem' }}>
                                    댓글{data?.Comments?.length}개
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    )
}

export default PostDesc
