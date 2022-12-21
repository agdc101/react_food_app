import React, {Fragment} from "react";
import headerImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Ash's Takeaway</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={headerImage} alt="a table full of tasty food."/>
            </div>
        </Fragment>
    )
};

export default Header;