import storeItems from '../data/items.json'
import {Stack, Button} from 'react-bootstrap'
import {useCard} from '../context/CardContext'


export default function CardItem({id, quantity}) {

const { removeItem } = useCard();
function priceItems (id) {
return (quantity * item.price)}


const item = storeItems.find(item => item.id === id)
  if (item == null) return null
  return (
    <>
    <Stack direction="horizontal" gap ={3} className ="d-flex align-items-center">
      <img src={item.imageUrl} style={{objectFit:"scale-down", width: "120px", height: "80px"}}></img>
      <p>{item.name}</p>
      <p className ="light">{item.price} zł</p>
      <p>x{quantity}</p>
      <p className ="font-weight-bold font-xl">{priceItems(id)} zł</p>
      <Button 
      variant ="light"
      className ="d-flex justify-content-center" 
      style={{width: "auto"}}
      onClick ={() => removeItem(id) }>X</Button>
    </Stack>
      <hr className ="m-auto"style={{width: "50%",}}></hr>
      </>
  )
}
  
