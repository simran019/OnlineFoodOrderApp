const Input = (props: any) => {
  return (
    <p className="font-bold">
      {props.label}
      <input
        className="border-2 border-black px-2 rounded-md w-14 ml-4 placeholder:text-black"
        {...props.input}
      />
    </p>
  );
};

export default Input;
