import React, {useContext, useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/Cart-context";
import classes from '../Layout/HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);
    const [highlightBtn, setHighlightBtn] = useState(false);

    // uses object destructuring to get "items" out of cart-context => saves into "items" variable.
    // we only want useEffect to run when "items" array is changed, not just anything in cart-context.
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        // "curNumber" is keeping a total of how many items there are in the cart.
        // the amount of each item is added on each iteration.
        return curNumber + item.amount;
    }, 0);

    // if "highlightBtn" is true => add the bump class.
    const btnClasses = `${classes.button} ${highlightBtn ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setHighlightBtn(true);

        // turns "highlightBtn" to false after 300ms => removes bump class ready for re-animation.
        const timer = setTimeout(() => {
            setHighlightBtn(false);
        }, 300);

        // this a "clean-up function". clears the timeout which is good practice as this would be unnecessary code if the button is ever removed.
        // also important for this app as we want the timer to reset to a full 300ms after every item is added.
        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;