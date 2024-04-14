import { useLoaderData } from "react-router-dom";
import Slider from "../slider/Slider";
import Estates from "../Estates/Estates";
import "../../App.css";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="">
      <Slider></Slider>
      <div className="max-w-7xl mx-auto">
        <Estates estates={data}></Estates>
      </div>
    </div>
  );
};

export default Home;
