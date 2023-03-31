import { useState } from "react"
import Settings from "./Settings"
import Winner from "./Winner"
import { Hearts } from 'react-loader-spinner'


type Props = {}

const NumMachine = (props: Props) => {
    const [inputValue, setInputValue] = useState(1)
    const [num, setNum] = useState(0)
    const [alreadyWinners, setAlreadyWinners] = useState<Set<number>>(new Set())
    const [isLoading, setIsLoading] = useState(false)
    const [isWinnerSet, setIsWinnerSet] = useState(false)


    const genWinnerNumber = (max: number) => {
        const randomNumber = Math.floor((Math.random() * max) + 1)
        setAlreadyWinners(prev => prev.add(randomNumber))
        return randomNumber
    }


    const onLotteryStart = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            const randomNumber = genWinnerNumber(inputValue)
            if (alreadyWinners.has(randomNumber)) {
                const nextRandomNumber = genWinnerNumber(inputValue)
                if (alreadyWinners.has(nextRandomNumber)) {
                    setNum(genWinnerNumber(inputValue))
                }
                setNum(nextRandomNumber)
            } else {
                setNum(randomNumber)
            }
            setIsWinnerSet(true)
        }, 3000)
    }
    return (
        <main className="h-full flex flex-col items-center mt-16">

            <Hearts
                height="380"
                width="380"
                color="#c7475f"
                ariaLabel="hearts-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={isLoading}
            />
            {!isLoading && isWinnerSet && <Winner num={num} />}
            {!isLoading && (
                <Settings value={inputValue} setInputValue={setInputValue} onLotteryStart={onLotteryStart} />
            )}
        </main>
    )
}

export default NumMachine