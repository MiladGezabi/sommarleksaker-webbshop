import { useRecoilState } from "recoil"
import { CartItems } from "../Atoms"
import { handleAddProduct, handleRemoveProduct } from "../../utils/handleProduct"



const CartPage = () => {
    const [cartItems, setCartItems] = useRecoilState(CartItems)

    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)

    return (

        <div className="cart-items">
            <h3 className="cart-items-header">Varukorg</h3>
            
            {cartItems.length === 0 && <h3 className="cart-items-empty">Din varukorg är tom</h3>}
            <div>
                {cartItems.map((item) =>{
                    return (
                    <div key={item.id} className="cart-items-list">
                        <img className="cart-items-image" src={item.picture} alt={item.name} />
                        <p className="cart-items-name">{item.name}</p>
                        <div>
                            <button className="cart-items-add"
                            onClick={() => handleAddProduct(item, cartItems, setCartItems)}>+</button>
                            <button className="cart-items-remove"
                            onClick={() => handleRemoveProduct(item, cartItems, setCartItems)}>-</button>
                        </div>
                        <p className="cart-items-price">
                            {item.quantity * item.price}Kr
                        </p>

                    </div>
                    )
                })}
            </div>
            <div className="cart-items-total-price-name">
                Totalt
                <div className="cart-items-total-price">
                    {totalPrice}Kr
                </div>

            </div>

        </div>
    )
}

export default CartPage