import { motion } from 'framer-motion'
type Props = {}

export const Footer = (props: Props) => {
    return (
        <footer
            className="bg-gray-900 opacity-70 p-4">
            <motion.h4
                initial={{ y: -10, opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                Crafted with <span className="text-red-600">❤</span> by <a className="hover:text-red-300" target="_blank" href="https://github.com/Kamil0Nowak">Kamil</a> for students.
            </motion.h4>
            <motion.h5
                className="text-sm"
                initial={{ y: -10, opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                Thank you <strong>Freepik</strong> for favicon!
            </motion.h5>
        </footer>
    )
}