import { Link } from 'react-router-dom'
type Props = {}

const Nav = (props: Props) => {
    return (
        <nav className='mt-auto mb-4'>
            <Link className='px-4 uppercase border rounded-md m-12 py-2 hover:bg-white hover:text-black transition-all' to={'/'}>Dzienniczek</Link>
            <Link className='px-4 uppercase border rounded-md m-2 py-2 hover:bg-white hover:text-black transition-all' to={'/wheel'}>Nagrody</Link>
        </nav>
    )
}

export default Nav