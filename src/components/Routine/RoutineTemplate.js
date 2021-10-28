import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import Icon from '../../components/icons/Icon'
import { ButtonFill, ButtonOutlined } from '../../elements/index'

const RoutineTemplate = (props) => {
    const { children, button, addBtn, _onClick_ } = props
    const history = useHistory()
    return (
        <>
            <MobileGrid>{children}</MobileGrid>
            <BtnPos>
                <ButtonFill
                    _width="217px"
                    _height="48px"
                    _padding="16px 24px"
                    _margin="0"
                    _onClick={props._onClick_}
                >
                    {button}
                </ButtonFill>
                {addBtn && (
                    <ButtonOutlined
                        _width="56px"
                        _margin="0"
                        _bradius="56px"
                        _others="height:56px;box-shadow: 0px 2px 0px 0px #000000;"
                        _border="1px solid #020202"
                        _onClick={() => {
                            history.push('/routine/add')
                        }}
                    >
                        <Icon icon="add-plus" size="21px" />
                    </ButtonOutlined>
                )}
            </BtnPos>
        </>
    )
}

RoutineTemplate.defaultProps = {
    button: '버튼 적기',
    addBtn: false,
    _onClick_: () => {},
}

const MobileGrid = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    padding: 0 16px 0 16px;
    min-height: 636px;
`
const BtnPos = styled.div`
    position: fixed;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 30px;
    z-index: -1;
`

export default RoutineTemplate
