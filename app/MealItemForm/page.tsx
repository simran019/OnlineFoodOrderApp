import Input from "../Input/page";

const MealItemForm = (props: any) => {
  return (
    <div className="flex flex-col gap-4 items-end">
      <div>
        <Input
          label="Amount"
          input={{
            type: "number",
            min: "1",
            max: "5",
            defaultValue: "1",
            step: "1",
            id: "amount_" + props.id,
          }}
        />
      </div>
      <button className="px-4 bg-red-800 text-white font-bold rounded-xl w-fit">
        <p>+ Add</p>
      </button>
    </div>
  );
};

export default MealItemForm;
