import Footer from "./components/ui/Footer"
import LuckyNumber from "./pages/LuckyNumber"
import { Route, Routes } from 'react-router-dom'
import WheelOfGlory from "./pages/WheelOfGlory"
import Nav from "./components/ui/Nav"

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<LuckyNumber />} />
        <Route path="/wheel" element={<WheelOfGlory />} />
      </Routes>

      <Nav />
      <Footer />
    </>
  )
}

export default App
