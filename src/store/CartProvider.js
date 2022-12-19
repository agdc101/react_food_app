import React, {useReducer} from "react";
import CartContext from "./Cart-context";

const defaultCartState = {
    items: [],
    totalAmount:0
};

// action is the object passed from the dispatch function ( i.e - type: "ADD_ITEM", item: item )
// state is defaultCartState object!
const CartReducer = (state, action) => { 
    if (action.type === "ADD_ITEM") {

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        // looks through items to see if item already exists - returns index of the first item that satisfies the rule.
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.item.id
        );
        // then we get the existing cart item using the index number.
        const existingCartItem = state.items[existingCartItemIndex];
        
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem, // existing item is inserted using spread operator.
                amount: existingCartItem.amount + action.item.amount
            };

            // all of the current items.
            updatedItems = [...state.items];

            // we then overwrite the existing item with the new updatedItem array - ( which will contain the new amount ).
            updatedItems[existingCartItemIndex] = updatedItem;

        } else {
            // if item doesnt exist, its simply added into the item array.
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    // the new updated state is now returned.
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

    // -- cart context is then updated with the cart state.
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