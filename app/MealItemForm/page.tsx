import { useRef , useState} from "react";
import Input from "../Input/page";

const MealItemForm = (props: any) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputAmountRef =useRef(0);

  const submitHandler =(event:any)=>{
    event.preventDefault();
    const inputAmount= inputAmountRef.current.value;
    if(inputAmount<1 || inputAmount>5 || inputAmount.trim().length==0){
      setAmountIsValid(false);
      return
    }
    props.onAddToCart(+inputAmount,props.id,props.amount,props.name);
  }

  return (
    <div className="flex flex-col gap-4 items-end">
      <div>
        <Input
        ref={inputAmountRef}
          label="Amount"
          input={{
            type: "number",
            min: "1",
            max: "5",
            defaultValue: "1",
            step: "1",
            id:props.id,
          }}
        />
      </div>
      {!amountIsValid && <span>Please enter a valid amount from 1-5</span>}
      <button className="px-4 bg-red-800 text-white font-bold rounded-xl w-fit" onClick={submitHandler}>
        <p>+ Add</p>
      </button>
    </div>
  );
};

export default MealItemForm;
