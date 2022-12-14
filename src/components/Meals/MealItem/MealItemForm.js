import React, {useRef, useState} from "react";
import Input from "../../UI/Input";
import classes from "../MealItem/MealItemForm.module.css";

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const inputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        
        const enteredStringAmount = inputRef.current.value;
        const enteredNumAmount = +enteredStringAmount;

        if (enteredStringAmount.trim().length === 0 || enteredNumAmount < 1 || enteredNumAmount > 5 ) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredNumAmount);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref={inputRef}
                label="Amount"
                input={{
                id: "amount-" + props.id,
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1"
            }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
};

export default MealItemForm;