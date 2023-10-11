import  Navbar  from './components/Navbar'
import Home from './pages/Home'
import Store from './pages/Store'
import {Routes, Route} from 'react-router-dom' 
import { CardProvider } from './context/CardContext'

function App() {

  return (
    <CardProvider>
    <>
<Routes>
  <Route path ="/" element ={<Home/>}></Route>
  <Route path ="/store" element ={<Store/>}></Route>
</Routes>
  </>
  </CardProvider>
  )
}

export default App
