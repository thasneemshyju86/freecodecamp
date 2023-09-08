import CartItems from '../CartItems'
import { useSelector } from 'react-redux'

const CartContainer=()=>{
    const {CartItems,total,amount}=useSelector((store)=>store.cart)
    if(amount<1){
        return(
<section className='cart'>
    <header>
        <h2>Your bag</h2>
        <h3 className='empty-cart'>is currently empty</h3>
    </header>
</section>
        )
    }
    return <div>CartContainer</div>
}

export default CartContainer