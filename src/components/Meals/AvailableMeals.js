import React from "react";
import Card from '../Layout/Card';
import MealItem from './MealItem/MealItem';
import classes from '../Meals/AvailableMeals.module.css';

// -=-=-= DUMMY DATA
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Meatfeast Pizza',
      description: 'Best Pizza in Exeter',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Big Mac',
      description: 'Much better than the McDonalds version',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Chicken Stirfry',
      description: 'An all-time classic',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Vegie Green Bowl',
      description: 'Green and delicious',
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