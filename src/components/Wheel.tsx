import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
//@ts-ignore
import WheelComponent from 'react-wheel-of-prizes'

type Props = {}

const Wheel = (props: Props) => {
    const [isFinished, setIsFinished] = useState(false)
    const segments = [
        'plusik za aktywność',
        'minusik za aktywność',
        'pała',
        'piątka',
        'podpowiedź na pytanie'
    ]
    const segColors = [
        '#40c5ee',
        '#5080f0',
        '#815CD1',
        '#1f70a0',
        '#4e34a2',
        '#1ff993',
        '#386fae',
        '#5d00ff'
    ]
    const onFinished = (winner: any) => {
        setIsFinished(true)
    }

    useEffect(() => {
        setTimeout(() => {
            setIsFinished(false)
        }, 5000)
    }, [isFinished])

    return (
        <>
            <WheelComponent
                segments={segments}
                segColors={segColors}
                winningSegment='won 10'
                onFinished={(winner) => onFinished(winner)}
                primaryColor='#ddd'
                contrastColor='black'
                buttonText='Losuj'
                isOnlyOnce={false}
                size={220}
                upDuration={100}
                downDuration={1000}
                fontFamily='Nunito'
            />
            {isFinished && <Confetti />}
        </>
    )
}

export default Wheel