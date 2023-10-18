import Image from "next/image";
import Bg from "../../public/images/bg.jpg";

const PictureSection = () => {
  return (
    <div className="text-black flex flex-col items-center text-white">
      <Image src={Bg} className="w-screen h-72 relative z-0" alt="bg_image" />
      <div
        className="flex flex-col gap-4 relative z-10 bg-slate-800 p-4 text-center w-1/3 rounded-xl"
        style={{ top: "-48px" }}
      >
        <h1 className="text-xl font-bold">Delicious Food, Delivered To You</h1>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </div>
  );
};

export default PictureSection;
