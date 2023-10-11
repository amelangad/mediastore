import {Card, Button} from 'react-bootstrap';
import { useCard } from '../context/CardContext';


export default function StoreItem({id, imageUrl, price, name}){

  const { increaseQuantity, decreaseQuantity, getItemQuantity} = useCard();

  const quantity = getItemQuantity(id);

  return (
    <Card  key={id} className ="h-100 justify-content-center" style ={{background: "transparent"}}>
      <Card.Header className ="bg-image">
        <Card.Img variant="top" src={imageUrl} height="200px" className="p-3" style={{objectFit: "contain",cursor: "pointer"}}/>
        </Card.Header>
      <Card.Body className ="d-flex flex-column" style ={{background: "#75a3a3"}}>
        <Card.Title className ="d-flex justify-content-between align-items-baseline mb-4">
          <span className ="fs-2">{name}</span>
          <span className ="ms-2 text-muted">{price}</span>
        </Card.Title>
        <div className ="mt-auto">
          <div className ="w-100 d-flex flex-row g-3 justify-content-center">
            {quantity !==0 ? (
            <>
<Button variant="light" onClick ={() =>decreaseQuantity(id)}>-</Button>
<span className="p-2">{quantity}</span>

<Button  variant="light" onClick ={() =>increaseQuantity(id)}>+</Button>
</>)
:(
<Button variant="light" onClick ={() =>increaseQuantity(id)}>Add to basket</Button>)}
</div>
           </div>
      </Card.Body>
    </Card>
)}
