import Confetti from 'react-confetti'
import { motion } from 'framer-motion'

type Props = {
    num: number,
}

const Winner = (props: Props) => {
    return (
        <motion.div
            className='bg-[#0a0a0a34] p-8 mb-6 rounded-lg'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
        >
            <Confetti />
            <p className='text-3xl'>Wygrywa numer: </p>
            <h3 className='text-9xl font-bold'>{props.num}</h3>
        </motion.div>
    )
}

export default Winner