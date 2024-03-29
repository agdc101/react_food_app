import React, {useRef} from 'react';
import classes from './Checkout.module.css';

const Checkout = (props) => {
const nameInputRef = useRef();
const streetInputRef = useRef();
const postalInputRef = useRef();
const cityInputRef = useRef();

const confirmHandler = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const street = streetInputRef.current.value;
    const postal = postalInputRef.current.value;
    const city = cityInputRef.current.value;
};

  return (
    <div>
      <form className={classes.form} onSubmit={confirmHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='street'>Street</label>
          <input type='text' id='street' ref={streetInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='postal'>Postal Code</label>
          <input type='text' id='postal' ref={postalInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='city'>City</label>
          <input type='text' id='city' ref={cityInputRef}/>
        </div>
        <div className={classes.actions}>
          <button type='button' onClick={props.onCancel}>
            Cancel
          </button>
          <button className={classes.submit}>Confirm</button>
      </div>
      </form>
    </div>
  );
}

export default Checkout;
