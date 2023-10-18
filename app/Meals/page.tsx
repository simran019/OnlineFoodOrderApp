import allMeals from "./mealsInfo";

const Meals = () => {
  console.log(allMeals, "hii");
  return (
    <div className="flex flex-col gap-4 bg-white px-4 py-8 rounded-xl w-1/2">
      {allMeals.map((meal: any, index: any) => {
        return (
          <div className="flex justify-between ">
            <div>
              <div className="font-bold">{meal.mealName}</div>
              <div className="text-slate-800">
                <i>{meal.mealDescription}</i>
              </div>
              <div className="text-red-600 font-bold">{meal.mealAmount}</div>
            </div>
            <div className="flex flex-col gap-4 items-end">
              <div>
                <p className="font-bold">
                  Amount
                  <input
                    type="number"
                    min="1"
                    max="5"
                    placeholder="0"
                    className="border-2 border-black px-2 rounded-md w-14 ml-4 placeholder:text-black"
                  />
                </p>
              </div>
              <button className="px-4 bg-red-800 text-white font-bold rounded-xl w-fit">
                <p>+ Amount</p>
              </button>
            </div>
          </div>
        );
      })}

    </div>
  );
};

export default Meals;
