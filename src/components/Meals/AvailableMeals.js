import React from "react";
import Card from '../Layout/Card';
import MealItem from './MealItem/MealItem';
import classes from '../Meals/AvailableMeals.module.css';

// -=-=-= DUMMY DATA
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //

const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map(meal => {
       return (
        <Card>
          <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
        </Card>
       )
    });

    return (
        <section className={classes.meals}>
            <ul>{mealsList}</ul>
        </section>
    );
};

export default AvailableMeals;