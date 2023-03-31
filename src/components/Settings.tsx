type Props = {
    setInputValue: (e: any) => void,
    value: number,
    onLotteryStart: () => void
}


const Settings = (props: Props) => {
    return (
        <form className="flex flex-col items-center" onSubmit={e => e.preventDefault()}>
            <input
                type="number" min="1" max="35" name="number" id="number" placeholder="Ilość graczy..."
                className="w-[20%] py-2 px-4 rounded text-gray-800  outline-none"
                value={props.value}
                onChange={(e) => props.setInputValue(e.target.value)}
            />
            <button
                className="px-32 py-4 mt-8 bg-slate-800 opacity-80 rounded-lg hover:scale-105 hover:opacity-100 active:scale-95 transition-all"
                onClick={props.onLotteryStart}
            >
                Losujemy!
            </button>
        </form>
    )
}

export default Settings