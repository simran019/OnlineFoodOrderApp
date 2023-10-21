const Card =(props:any)=>{
    return (
    <div className={`bg-white flex flex-col gap-4 px-4 py-8 rounded-xl ${props.className}`}>
    {props.children}
    </div>
    )
}

export default Card;