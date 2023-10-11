import {useContext, createContext, useState} from 'react'
import Basket from '../components/Basket'

const CardContext = createContext({});

export function useCard () {
    return useContext(CardContext);
}

export function CardProvider ({children}) {
    const [show, setShow] = useState(false);
    const [cardItems, setCardItems] = useState([]);

    const CardQuantity = cardItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function getItemQuantity(id) {
        return cardItems.find(item =>item.id === id)?.quantity || 0;
    }

    function removeItem(id) {
        setCardItems(items => {
            return items.filter(item => item.id !== id) 
            })
    }
    
    function increaseQuantity(id){
        setCardItems(items => {
            if(items.find(el=> el.id === id) == null){
                return [...items,  {id, quantity:1}]
            }
            else {
                return items.map(item => {
                    if (item.id ===id){
                        return { ...item, quantity: item.quantity + 1}
                    }
                    else {
                        return item
                    }
                })
            }
        })
        }
        function decreaseQuantity(id){
            setCardItems(currItems => {
                if(currItems.find(item=> item.id === id).quantity === 1){
                    return currItems.filter(item => item.id !== id)
                }
                else {
                    return currItems.map(item => {
                        if (item.id ===id){
                            return { ...item, quantity: item.quantity - 1}
                        }
                        else {
                            return item
                        }
                    })
                }
            })
            }


    return(<CardContext.Provider value={{ cardItems, setCardItems, handleClose, handleShow, show, getItemQuantity, decreaseQuantity, increaseQuantity, CardQuantity, removeItem }}>
        <>
        {children}
        <Basket/>
        </>
    </CardContext.Provider>
    )
}