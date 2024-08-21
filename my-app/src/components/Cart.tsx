import { useAppSelector } from "../store/store"
import { CartItem } from "../store/features/cartSlice"

function Cart() {
    const totalItemQUantity = useAppSelector( state =>  state.cart.items.reduce((total: number, current: CartItem) => total += current.quantity, 0))
  return (
    <div className="border p-3 rounded-md bg-green-800 text-white">
        <div>
            <span>
                Cart Item Count :  
                <span className="font-bold">{totalItemQUantity}</span>
            </span>
        </div>
    </div>
  )
}

export default Cart