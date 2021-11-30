import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../../redux/store'
import {
    myRoutinePresetMD,
    myRoutineListMD,
    setMainRoutineMD,
} from '../../redux/async/routine'
import { actionResetMD } from '../../redux/async/actionComplete'
import { setRoutineId } from '../../redux/modules/mainRoutine'
import {
    setRoutineModal,
    setRoutineInfo,
    setOptionModal,
} from '../../redux/modules/routineSlice'
import {
    setResult,
    setFakeResult,
    setTempRoutineId,
} from '../../redux/modules/completeSlice'
import Swal from 'sweetalert2'

const RoutineDesc = (props) => {
    const dispatch = useDispatch()
    const { select } = props
    const [desc, setDesc] = React.useState('first')
    const preset = useSelector((state) => state.routine.presetRoutine)
    const myset = useSelector((state) => state.routine.myRoutine)
    const BtnStatus = useSelector((state) => state.routine.BtnStatus)
    const getRoutineId = useSelector((state) => state.setAction.routineId)
    const mainRoutine = useSelector((state) => state.setAction.mainRoutine)
    const getTempRoutineId = useSelector(
        (state) => state.actionComplete.tempRoutineId
    )
    const getResult = useSelector((state) => state.actionComplete.result)
    const getFakeResult = useSelector(
        (state) => state.actionComplete.fakeResult
    )
    const charList = useSelector((state) => state.character.charList)
    const curChara =
        charList.length > 0 && charList[charList.length - 1].charName

    React.useEffect(() => {
        if (select === 'first') {
            setDesc('myRoutine')
        } else if (select === 'second') {
            setDesc('recommendRoutine')
        } else {
            setDesc('myRoutine')
        }
    }, [select])

    React.useEffect(() => {
        dispatch(myRoutinePresetMD())
        dispatch(myRoutineListMD())
    }, [])

    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
    })

    const resetRoutine = (routineId) => {
        Swal.fire({
            text: '진행중이던 루틴을 초기화 하시겠습니까?',
            showCancelButton: true,
            confirmButtonColor: '#6B76FF',
            cancelButtonColor: '#DEDEDE',
            confirmButtonText: '삭제',
            cancelButtonText: '취소',
            width: '30rem',
            height: '15rem',
            reverseButtons: true,
        }).then((willDelete) => {
            if (willDelete) {
                dispatch(actionResetMD(routineId))
                const data = getRoutineId
                console.log('data', data)
                dispatch(setMainRoutineMD(data))
                dispatch(setResult([]))
                dispatch(setFakeResult([]))
                Toast.fire({
                    icon: 'success',
                    title: '메인루틴으로 변경되었습니다.',
                })
                history.push('/')
            } else return
        })
    }

    return (
        <>
            {desc === 'myRoutine' && (
                <div
                    className="routine-box-container"
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    {myset?.map((routine, idx) => (
                        <button
                            className="routine-box"
                            key={idx}
                            onClick={(e) => {
                                e.target.classList.add('.active')
                                dispatch(setRoutineModal(true))
                                if (routine.Actions.length > 0) {
                                    dispatch(
                                        setTempRoutineId(
                                            routine?.Actions[0].routineId
                                        )
                                    )
                                    console.log(
                                        '루틴선택',
                                        routine?.Actions[0].routineId
                                    )
                                }
                            }}
                        >
                            <div className="text-box">
                                <h3>{routine?.routineName}</h3>
                                <div
                                    onClick={() => {
                                        dispatch(setOptionModal(true))
                                        dispatch(setRoutineInfo(routine))
                                    }}
                                >
                                    <div className="ic-box-container">
                                        <div className="icon-box"></div>
                                        <div className="icon-box"></div>
                                        <div className="icon-box"></div>
                                    </div>
                                </div>
                            </div>
                            <p>
                                {routine?.Actions?.map((action, idx) =>
                                    routine?.Actions?.length - 1 === idx
                                        ? `${action?.actionName}`
                                        : action?.actionName?.length > 5
                                        ? `${action?.actionName?.slice(
                                              0,
                                              3
                                          )}.. / `
                                        : `${action?.actionName} / `
                                )}
                            </p>
                        </button>
                    ))}
                    {curChara && myset?.length === 0 && (
                        <p className="no-routine">
                            아직 루틴이 없네요!
                            <br />
                            아래 + 버튼을 눌러서
                            <br />새 루틴을 만들어보세요😊
                        </p>
                    )}
                    {curChara === false && (
                        <p className="no-routine">
                            아직 캐릭터를 받지 않으셨군요!
                            <br />
                            홈에서 캐릭터 먼저 받아주세요😉
                        </p>
                    )}
                </div>
            )}
            {desc === 'recommendRoutine' && (
                <section
                    className="routine-box-container"
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    {preset.length > 0 &&
                        preset?.map((routine, idx) => (
                            <button
                                key={idx}
                                className="recommend-routine-box"
                                onClick={() => {
                                    dispatch(setRoutineModal(true))
                                    if (routine.Actions.length > 0) {
                                        dispatch(
                                            setTempRoutineId(
                                                routine?.Actions[0].routineId
                                            )
                                        )
                                        console.log(
                                            '프리셋선택',
                                            routine?.Actions[0].routineId
                                        )
                                    }
                                }}
                            >
                                <h3>{routine?.routineName}</h3>
                                <div>
                                    <p>
                                        {routine?.Actions?.map((action, idx) =>
                                            routine?.Actions?.length - 1 === idx
                                                ? `${action?.actionName}`
                                                : action?.actionName?.length > 5
                                                ? `${action?.actionName?.slice(
                                                      0,
                                                      3
                                                  )}.. / `
                                                : `${action?.actionName} / `
                                        )}
                                    </p>
                                </div>
                            </button>
                        ))}
                </section>
            )}
            {BtnStatus && (
                <div
                    style={{
                        zIndex: '3',
                        width: '100vw',
                        display: 'flex',
                        justifyContent: 'center',
                        zIndex: 5,
                    }}
                >
                    <button
                        className="setting-btn"
                        onClick={() => {
                            if (
                                getResult?.length > 0 &&
                                getFakeResult?.length > 0
                            ) {
                                const routineId =
                                    mainRoutine.Actions.length > 0 &&
                                    mainRoutine.Actions[0].routineId
                                console.log('바꼈나', routineId)
                                dispatch(setRoutineId(routineId))
                                resetRoutine(routineId)
                            }
                            if (
                                (getResult?.length == 0 &&
                                    getFakeResult?.length == 0) ||
                                typeof mainRoutine == 'undefined'
                            ) {
                                const data = getTempRoutineId
                                dispatch(setMainRoutineMD(data))
                                dispatch(setResult([]))
                                dispatch(setFakeResult([]))
                                history.push('/')
                            }
                        }}
                    >
                        메인 루틴으로 설정하기
                    </button>
                </div>
            )}
        </>
    )
}

RoutineDesc.defaultProps = {
    select: 'first',
}

export default RoutineDesc
