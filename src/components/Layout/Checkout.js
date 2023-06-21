import React from 'react';
import classes from './Checkout.module.css';

const Checkout = (props) => {

const confirmHandler = (event) => {
    event.preventDefault();
    // const enteredName = event.target.name.value;
    // const enteredStreet = event.target.street.value;
    // const enteredPostal = event.target.postal.value;
    // const enteredCity = event.target.city.value;
};

  return (
    <div>
      <form onSubmit={confirmHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' />
        </div>
        <div className={classes.control}>
          <label htmlFor='street'>Street</label>
          <input type='text' id='street' />
        </div>
        <div className={classes.control}>
          <label htmlFor='postal'>Postal Code</label>
          <input type='text' id='postal' />
        </div>
        <div className={classes.control}>
          <label htmlFor='city'>City</label>
          <input type='text' id='city' />
        </div>
        <button>Confirm</button>
        <button type="button" onClick={props.onCancel} >Cancel</button>
      </form>
    </div>
  );
}

export default Checkout;
