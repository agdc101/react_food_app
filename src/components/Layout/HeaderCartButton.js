import React, {useContext} from "react";
import CartContext from "../../store/Cart-context";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/Cart-context";
import classes from '../Layout/HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;