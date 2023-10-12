import { Row, Col, Button } from 'react-bootstrap';
import storeItems from '../data/items.json'
import StoreItem from '../components/StoreItem';
import Footer from '../components/Footer';
import  Navbar  from '../components/Navbar'
import { useCard } from '../context/CardContext';

export default  function Store() {

  const {handleShow, CardQuantity} = useCard();
  return (
<div className="w-100 position-relative" style ={{background: "black"}}>
    <Navbar/>
    <Button variant= "light" onClick={handleShow} style={{width:"40px", height: "40px", borderRadius: "20%", zIndex:"50", position:"absolute", top:"20px", right: "30px"}}>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
<Button variant="dark" className ="position-absolute bottom-30 end-50 d-flex justify-content-center align-items-center" style={{width:"1px", height: "20px"}}>{CardQuantity}</Button>
       </Button>
    <div className ="overflow-x-hidden min-vh-100 px-5"  style ={{background: "#eff5f5"}}>
    <h1 className ="my-3 d-flex justify-content-center">Store</h1>
    <Row md={2} xs ={1} lg={3} className ="g-3" >
    {storeItems.map(item => (
<Col style={{marginBottom: "50px"}} key ={item.id}><StoreItem {...item}/></Col>
     ))}
    </Row>
    </div>
    <Footer/>
    </div>
  )
}