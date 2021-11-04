import React from 'react'
import swal from 'sweetalert'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Text, FlexRow, LikeBtn, Img } from '..'
import Icon from '../../components/icons/Icon'
import { moimDeleteMD } from '../../redux/async/moim'
import { history } from '../../redux/store'

const PostDesc = () => {
    const dispatch = useDispatch()
    const post_data_all = useSelector((state) => state.moim.moim_all)
    const loginNickName = useSelector((state) => state.user.userInfo.nickName)

    const deletePost = (data) => {
        swal({
            title: '게시글을 지우시겠습니까 ?',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                dispatch(moimDeleteMD(data))
                swal('게시글이 지워졌습니다.', {
                    icon: 'success',
                })
            } else return
        })
    }

    return (
        <>
            {post_data_all.length > 0 &&
                post_data_all?.map((data, idx) => (
                    <div key={idx}>
                        {Object.keys(post_data_all).length > 0 &&
                            data?.MoimUsers[0]?.User?.nickName ===
                                loginNickName && (
                                <CloseBtn
                                    onClick={() => {
                                        deletePost(data?.id)
                                    }}
                                >
                                    X
                                </CloseBtn>
                            )}

                        {data?.imgSrc === null ? (
                            <PostDescBox
                                onClick={() => {
                                    history.push(`/moim/detail/${data?.id}`)
                                }}
                            >
                                <Text _fontWeight="700" _fontSize="16px">
                                    {data?.title}
                                </Text>
                                <TextBox>
                                    {data?.MoimUsers[0]?.User?.nickName}
                                </TextBox>
                                <TextBox>{data?.createdAt}</TextBox>
                                <TextBox>
                                    참여자 {data?.MoimUsers?.length}명
                                </TextBox>
                            </PostDescBox>
                        ) : (
                            <div>
                                <PostImgBox
                                    onClick={() => {
                                        history.push(`/moim/detail/${data?.id}`)
                                    }}
                                >
                                    <Text _fontWeight="700" _fontSize="16px">
                                        {data.title}
                                    </Text>
                                    <TextBox>
                                        {data?.MoimUsers[0]?.User?.nickName}
                                    </TextBox>
                                    <TextBox>{data?.createdAt}</TextBox>
                                    <TextBox>
                                        참여자 {data?.MoimUsers?.length}명
                                    </TextBox>
                                    <ImgWarp>
                                        <Img
                                            _src={data.imgSrc}
                                            _width="auto"
                                            _height="8rem"
                                        />
                                    </ImgWarp>
                                    <div></div>
                                </PostImgBox>
                            </div>
                        )}
                        <EtcBox>
                            <SmallBox>
                                <LikeBtn /> 좋아요
                                {data?.Likes?.length}개
                            </SmallBox>
                            <SmallBox>
                                <Icon icon={'message'} size="20px" />
                                댓글{data?.Comments?.length}개
                            </SmallBox>
                        </EtcBox>
                    </div>
                ))}
        </>
    )
}

const PostDescBox = styled.article`
    display: grid;
    grid-template-columns: 7fr 2fr;
    justify-items: start;
    align-items: center;
    width: 90vw;
    height: 90px;
    padding: 5px 20px;
    border: 1px solid lightgray;
`

const PostImgBox = styled.article`
    display: grid;
    grid-template-columns: 7fr 2fr;
    justify-items: start;
    align-items: center;
    width: 90vw;
    height: 200px;
    padding: 5px 20px;
    border: 1px solid lightgray;
`

const ImgWarp = styled.div`
    width: 50vw;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const EtcBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 90vw;
    height: 45px;
    border: 1px solid lightgray;
    border-top: none;
    margin-bottom: 10px;
`

const SmallBox = styled.div`
    display: flex;
    height: inherit;
    justify-content: center;
    align-items: center;
`

const TextBox = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    color: lightgray;
    font-size: 14px;
`

const CloseBtn = styled.button`
    position: absolute;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    right: 20px;
    margin: 10px;
`

export default PostDesc
