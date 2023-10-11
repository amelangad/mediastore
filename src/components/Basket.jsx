import { Offcanvas, Stack} from 'react-bootstrap';
import { useCard } from '../context/CardContext';
import CardItem from './CardItem';


function ResponsiveExample() {
    const {show, handleClose, cardItems} = useCard();

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end" >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your basket:</Offcanvas.Title>
        </Offcanvas.Header>
        <div className ="d-flex flex-row gap-3 text-muted w-100" style ={{paddingLeft: "140px", fontSize: "12px"}}>
      <p>name</p>
      <p>price</p>
      <p>quantity</p>
      <p>totalPrice</p>
    </div>
        <Offcanvas.Body>
        <Stack gap={3}>
          {cardItems.map(item=> (
            <CardItem key={item.id} {...item}/>
          ))}
        </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ResponsiveExample;