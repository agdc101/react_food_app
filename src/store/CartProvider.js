import React, {useReducer} from "react";
import CartContext from "./Cart-context";

const defaultCartState = {
    items: [],
    totalAmount:0
};

const CartReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        const updatedCart = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedCart,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(CartReducer, defaultCartState);

    const addItemHandler = (item) => {
        dispatchCartAction({type: "ADD_ITEM", item: item});
    };

    const removeItemHandler = (id) => {
        dispatchCartAction({type: "REMOVE_ITEM", id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;