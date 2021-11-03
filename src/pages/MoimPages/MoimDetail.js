import React from 'react'
import Header from '../../components/Header'
import { NavBar } from '../../components'
import { Text, LikeBtn, ButtonFill, FlexRow } from '../../elements'
import styled from 'styled-components'
import Icon from '../../components/icons/Icon'
import { useSelector, useDispatch } from 'react-redux'
import { moimDetailMD, moimReviewCreateMD } from '../../redux/async/moim'
import MoimReview from '../../components/Moim/MoimReview'

const MoimDetail = (props) => {
    const post_id = props.match.params.id
    const dispatch = useDispatch()

    const post_data = useSelector((state) => state.moim.moim_detail)
    // const user_id = useSelector((state)=>state.user.userInfo.)
    React.useEffect(() => {
        dispatch(moimDetailMD(post_id))
    }, [post_id])

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

    return (
        <>
            <Header name="모임" type="back" />
            <DetailBox>
                <TitleBox>
                    <div>
                        <Text _fontSize="16px">{post_data?.title}</Text>
                        <Text _fontSize="11px" _color="#8f8f8f">
                            {post_data?.createdAt} 작성자 닉필요
                        </Text>
                    </div>
                    <Text _fontSize="11px">
                        참여자 : {post_data?.MoimUsers?.length}
                    </Text>
                </TitleBox>
                <ContentBox>
                    <Text _fontSize="14px">{post_data?.contents}</Text>
                </ContentBox>
                <JoinBtn>모임참여하기</JoinBtn>
                <EtcBox>
                    <SmallBox>
                        <LikeBtn /> 좋아요
                        {post_data?.Likes?.length}개
                    </SmallBox>
                    <SmallBox>
                        <Icon icon={'message'} size="20px" />
                        댓글 {post_data?.Comments?.length}개
                    </SmallBox>
                </EtcBox>
                <MoimReview moimId={post_id} />
            </DetailBox>
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
    height: 300px;
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

export default MoimDetail
