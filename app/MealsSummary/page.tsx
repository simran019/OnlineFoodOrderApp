const MealsSummary =()=>{
    return(
        <div
        className="flex flex-col gap-4 text-xl relative z-10 bg-slate-800 p-4 text-center w-1/2 rounded-xl"
        style={{ top: "-48px" }}
      >
        <h1 className="text-3xl font-bold">Delicious Food, Delivered To You</h1>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    )
}

export default MealsSummary;