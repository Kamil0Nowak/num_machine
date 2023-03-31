import Header from "../components/Header"
import NumMachine from "../components/NumMachine"

type Props = {}

const LuckyNumber = (props: Props) => {
    return (
        <>
            <Header text="Kto dziś ma szczęście?" />
            <NumMachine />
        </>
    )
}

export default LuckyNumber