import React, {useContext} from "react";
import MealItemForm from "./MealItemForm";
import classes from './MealItem.module.css';
import CartContext from "../../../store/Cart-context";

const MealItem = props => {
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        }); //-- addItem defined in Cart-context.
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.price}>{price}</p>
            </div>
            <div><MealItemForm id={props.id} onAddToCart={addToCartHandler} /></div>
        </li>
    )
}

export default MealItem;