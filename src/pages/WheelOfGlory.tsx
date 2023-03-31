import Header from "../components/Header"
import Wheel from "../components/Wheel"


type Props = {}

const WheelOfGlory = (props: Props) => {
    return (
        <>
            <Header text="Nagrody! Nagrody rozdają" />
            <Wheel />
        </>
    )
}

export default WheelOfGlory