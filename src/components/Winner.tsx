import Confetti from 'react-confetti'

type Props = {
    num: number,
}

const Winner = (props: Props) => {
    return (
        <div className='bg-[#0a0a0a34] p-8 mb-4 rounded-lg'>
            <Confetti />
            <p className='text-3xl'>Wygrywa numer: </p>
            <h3 className='text-9xl font-bold'>{props.num}</h3>
        </div>
    )
}

export default Winner