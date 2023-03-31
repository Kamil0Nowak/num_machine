import { useEffect, useState } from "react"
import Settings from "./Settings"
import Winner from "./Winner"
import { Hearts } from 'react-loader-spinner'


type Props = {}

const NumMachine = (props: Props) => {
    const [inputValue, setInputValue] = useState(1)
    const [num, setNum] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [isWinnerSet, setIsWinnerSet] = useState(false)


    const genWinnerNumber = (max: number) => {
        return Math.floor((Math.random() * max) + 1)
    }


    const onLotteryStart = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setNum(genWinnerNumber(inputValue))
            setIsWinnerSet(true)
        }, 3000)
    }
    return (
        <main className="h-full flex flex-col items-center mt-32">

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
            <Settings value={inputValue} setInputValue={setInputValue} onLotteryStart={onLotteryStart} />
        </main>
    )
}

export default NumMachine