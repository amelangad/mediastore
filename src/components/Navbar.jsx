import {  Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


export default function Navbar( ) {

  
  return (
    <div className ="h-100">
    <NavbarBs className ="shadow" style={{zIndex: "50", height: "80px"}}>
        <Container>
            <Nav className ="me-auto">
            <Nav.Link to ="/" as={NavLink} className="text-white :hover-color-red">Home</Nav.Link>
            <Nav.Link to ="/store" as={NavLink} className="text-white">Store</Nav.Link>
            </Nav>
        </Container>
    </NavbarBs>
    </div>
  )
}
