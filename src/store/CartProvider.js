import React, {useReducer} from "react";
import CartContext from "./Cart-context";

const defaultCartState = {
    items: [],
    totalAmount:0
};

// action is the object passed from the dispatch function ( i.e - type: "ADD_ITEM", item: item )
// state is defaultCartState object! = the current state.
const CartReducer = (state, action) => { 

    if (action.type === "ADD_ITEM") {

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        // finds the item!
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

    if (action.type === "REMOVE_ITEM") {

        // finds the item!
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.id
        );
        // then we get the existing cart item using the index number.
        const existingCartItem = state.items[existingCartItemIndex];
        
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;

        let updatedItems;

        if (existingCartItem.amount === 1) {
            // returns a new array without the removed item, as the amount was 1.
            updatedItems = state.items.filter(
                // item.id ==> items in the array. action.id ==> item that is being removed.
                item => item.id !== action.id
            );
        } else {
            // the new updated item.
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};

            // the items array. (state.items)
            updatedItems = [...state.items];

            // replacing the item in the array with the item with the new updated amount.
            updatedItems[existingCartItemIndex] = updatedItem;
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
    // cartstate is cartcontext!
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
        addItem: addItemHandler, // addItem in Cart-context is defined here as AddItemHandler which fires dispatch function.
        removeItem: removeItemHandler
    };

    return (
        // CartProvider is linked to CartContext.
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;