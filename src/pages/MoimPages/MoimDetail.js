import React from 'react'
import Header from '../../components/Header'
import { history } from '../../redux/store'
import { NavBar } from '../../components'
import { Text, LikeBtn, ButtonFill, FlexRow, Img } from '../../elements'
import styled from 'styled-components'
import Icon from '../../components/icons/Icon'
import { useSelector, useDispatch } from 'react-redux'
import {
    moimDetailMD,
    moimReviewCreateMD,
    moimDeleteMD,
    moimJoinMD,
} from '../../redux/async/moim'
import MoimReview from '../../components/Moim/MoimReview'
import { moimUpdate } from '../../redux/modules/moimSlice'

const MoimDetail = (props) => {
    const post_id = props.match.params.id
    const dispatch = useDispatch()

    const user_nick = useSelector((state) => state.user.userInfo.nickName)
    const post_data = useSelector((state) => state.moim.moim_detail)

    React.useEffect(() => {
        dispatch(moimDetailMD(post_id))
    }, [])

    // * post delete
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
                history.push('/moim')
            } else return
        })
    }

    // * commnet create
    const [contents, setContents] = React.useState('')
    const commitsubmit = () => {
        const data = {
            moimId: post_id,
            contents,
        }
        dispatch(moimReviewCreateMD(data))
        setContents('')
    }

    // * join Moim
    const join = (data) => {
        dispatch(moimJoinMD(data))
    }

    return (
        <>
            <Header name="모임" type="back" />
            <DetailBox>
                <TitleBox>
                    {Object.keys(post_data).length > 0 &&
                        post_data.MoimUsers[0].User.nickName === user_nick && (
                            <div>
                                <CloseBtn
                                    onClick={() => {
                                        console.log('deleteclick')
                                        deletePost(post_data?.id)
                                    }}
                                >
                                    x
                                </CloseBtn>
                                <button
                                    onClick={() => {
                                        dispatch(moimUpdate(post_data))
                                        history.push('/moim/update')
                                    }}
                                >
                                    u
                                </button>
                            </div>
                        )}
                    <div>
                        <Text _fontSize="16px">{post_data?.title}</Text>
                        <Text _fontSize="11px" _color="#8f8f8f">
                            {post_data?.createdAt}
                        </Text>
                        <Text _fontSize="11px" _color="#8f8f8f">
                            작성자 :{' '}
                            {Object.keys(post_data).length > 0 &&
                                post_data?.MoimUsers[0]?.User.nickName}
                        </Text>
                    </div>
                    <Text _fontSize="11px">
                        참여자 : {post_data?.MoimUsers?.length}
                    </Text>
                </TitleBox>
                <ContentBox>
                    <Text _fontSize="14px">{post_data?.contents}</Text>
                    {post_data?.imgSrc !== null && (
                        <Img _src={post_data?.imgSrc} />
                    )}
                </ContentBox>
                {Object.keys(post_data).length > 0 &&
                    user_nick !== post_data?.MoimUsers[0]?.User.nickName && (
                        <JoinBtn
                            onClick={() => {
                                const data = {
                                    moimId: post_data?.id,
                                    userId: post_data?.MoimUsers[0]?.userId,
                                }
                                join(data)
                            }}
                        >
                            모임참여하기
                        </JoinBtn>
                    )}
                <EtcBox>
                    <SmallBox>
                        // ! like btn
                        <LikeBtn moim_id={post_data?.id} /> 
                        좋아요 {post_data?.Likes?.length}개
                    </SmallBox>
                    <SmallBox>
                        <Icon icon={'message'} size="20px" />
                        댓글 {post_data?.Comments?.length}개
                    </SmallBox>
                </EtcBox>
            </DetailBox>
            <div style={{ marginBottom: '60px', width: '100vw' }}>
                <MoimReview moimId={post_id} />
            </div>
            <FlexRow
                _width="100vw"
                _border="none"
                _others="position:fixed;bottom:0"
                _margin="10px 0"
            >
                <ReviewInput
                    placeholder="댓글을 입력해주세요"
                    onChange={(e) => {
                        setContents(e.target.value)
                    }}
                    value={contents}
                ></ReviewInput>
                <SubmitBtn
                    onClick={() => {
                        commitsubmit()
                    }}
                >
                    등록
                </SubmitBtn>
            </FlexRow>
        </>
    )
}

const TitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`

const ContentBox = styled.div`
    height: 280px;
    padding: 10px;
`

const JoinBtn = styled.button`
    width: 101px;
    height: 29px;
    background-color: #c4c4c4;
    margin: 0 auto;
    border: none;
    font-size: 11px;
    position: absolute;
    left: 15px;
    top: 273px;
`

const DetailBox = styled.div`
    margin: 5vw auto;
    width: 90vw;
    height: 100%;
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
    margin-bottom: 10px;
`

const ReviewInput = styled.input`
    width: 280px;
    height: 40px;
    padding-left: 10px;
`

const SubmitBtn = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 5px;
    border: none;
    margin-left: 5px;
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

export default MoimDetail
