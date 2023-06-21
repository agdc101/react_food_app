import React, { useEffect,useState } from "react";
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
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
      const getMeals = async () => {
        setIsLoading(true);
          const response = await fetch('https://react-http-test-5443a-default-rtdb.firebaseio.com/Meals.json')
            if (!response.ok) {
              throw new Error('Something went wrong!');
            }

            const responseData = await response.json();
            const loadedMeals = [];
            for (const key in responseData) {
              loadedMeals.push({
                id: key,
                name: responseData[key].name,
                description: responseData[key].description,
                price: responseData[key].price
              });
            }
            setMeals(loadedMeals);
            setIsLoading(false);
      }

        getMeals().catch(error => {
          setIsLoading(false);
          setHttpError(error.message);
        });
    },[]);

    const mealsList = meals.map(meal => {
       return (
        <Card>
          <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
        </Card>
       )
    });

    if(httpError) {
      return (
        <section className={classes.mealserror}>
          <p>{httpError}</p>
        </section>
      )
    }

    return (
      <section className={classes.meals}>
          {isLoading && <p className={classes.mealsloading}>Loading...</p>}
          <ul>{mealsList}</ul>
      </section>
    );
};

export default AvailableMeals;