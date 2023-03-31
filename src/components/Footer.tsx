type Props = {}

export const Footer = (props: Props) => {
    return (
        <footer className="bg-gray-900 opacity-70 p-4">
            <h4>
                Crafted with <span className="text-red-600">❤</span> by <a className="hover:text-red-300" href="https://github.com/Kamil0Nowak">Kamil</a> for students.
            </h4>
            <h5 className="text-sm">
                Thank you <strong>Freepik</strong> for favicon!
            </h5>
        </footer>
    )
}