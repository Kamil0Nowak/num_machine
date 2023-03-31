import { motion } from 'framer-motion'

type Props = {
    text: string
}

const Header = (props: Props) => {
    return (
        <header className="bg-gray-900 opacity-70 p-4 py-6">
            <motion.h1
                className="text-3xl md:text-6xl font-bold"
                initial={{ y: -10, opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                {props.text}
            </motion.h1>
        </header>
    )
}

export default Header