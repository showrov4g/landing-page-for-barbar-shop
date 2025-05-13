import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
    </div>
  );
}
