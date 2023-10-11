import Slider from "../components/Slider"
import  Navbar  from '../components/Navbar'

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className ="w-100 h-100 position-absolute top-0">
    <Slider/>
    </div>
    </>
  )
}
