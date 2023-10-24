import { useContext } from "react";

import allMeals from "./mealsInfo";
import Card from "../Card/page";
import MealItem from "../MealItem/page";
import CartContext from "../store/cart-context";

const Meals = (props: any) => {
  const cartCtx = useContext(CartContext);
  const cartHandler = (amount: any, id:any,price:any,name:string) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };
  return (
    <Card className="w-1/2">
      {allMeals.map((meal: any, index: any) => {
        return (
          <MealItem
            key={meal.mealId}
            id={meal.mealId}
            name={meal.mealName}
            price={meal.price}
            description={meal.mealDescription}
            amount={meal.mealAmount}
            onAddToCart={cartHandler}
          />
        );
      })}
    </Card>
  );
};

export default Meals;
