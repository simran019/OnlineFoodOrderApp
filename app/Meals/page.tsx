import allMeals from "./mealsInfo";
import Card from "../Card/page";
import MealItem from "../MealItem/page";

const Meals = (props: any) => {
  return (
    <Card className="w-3/4">
      {allMeals.map((meal: any, index: any) => {
        return (
          <MealItem
            key={meal.mealId}
            id={meal.mealId}
            name={meal.mealName}
            description={meal.mealDescription}
            amount={meal.mealAmount}
          />
        );
      })}
    </Card>
  );
};

export default Meals;
