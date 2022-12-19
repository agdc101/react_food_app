import React, {useContext} from 'react';
import classes from './Cart.module.css';
import Modal from '../../components/UI/Modal';
import CartItem from "../Cart/CartItem";
import CartContext from "../../store/Cart-context";

const Cart = (props) => {
    const CartCtx = useContext(CartContext);

    // total dollar amount of all the items - this is complied in cart provider whenever cartcontext state changes.
    const totalAmount = `$${CartCtx.totalAmount.toFixed(2)}`;

    const hasItems = CartCtx.items.length > 0;

    const removeCartItemHandler = (id) => {
        CartCtx.removeItem(id);
    };
    const addCartItemHandler = (item) => {
        CartCtx.addItem({
            ...item,
            amount: 1
        });
    };

    const cartItems = 
        <ul className={classes['cart-items']}>
            {CartCtx.items.map((item) => 
            <li>
                <CartItem 
                    key={item.id} 
                    name={item.name} 
                    amount={item.amount} 
                    price={item.price} 
                    onRemove={removeCartItemHandler.bind(null, item.id)} 
                    onAdd={addCartItemHandler.bind(null, item)
                    }/>
            </li>)}
        </ul>; 

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
