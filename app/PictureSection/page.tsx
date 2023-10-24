import Image from "next/image";
import Bg from "../../public/images/bg.jpg";
import MealsSummary from "../MealsSummary/page";

const PictureSection = (props:any) => {
  return (
    <div className="text-black flex flex-col items-center text-white sticky">
      <Image src={Bg} className="w-screen h-72 relative z-0" alt="bg_image" />
      <MealsSummary/>
    </div>
  );
};

export default PictureSection;
