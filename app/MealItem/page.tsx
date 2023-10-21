import MealItemForm from "../MealItemForm/page";

const MealItem = (props: any) => {
  const { id, name, description, amount } = props;

  return (
    <>
      <div className="flex justify-between" key={id}>
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-slate-800">
            <i>{description}</i>
          </div>
          <div className="text-red-600 font-bold">{amount}</div>
        </div>
        <MealItemForm id={id} />
      </div>
      <hr className="border-0.5 border-red-800 rounded-xl"></hr>
    </>
  );
};

export default MealItem;
