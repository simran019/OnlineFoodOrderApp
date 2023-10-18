import Image from "next/image";
import Header from "./Header/page";
import PictureSection from "./PictureSection/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header/>
      <PictureSection/>
    </main>
  );
}
