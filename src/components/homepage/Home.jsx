import { useLoaderData } from "react-router-dom";
import Slider from "../slider/Slider";
import Estates from "../Estates/Estates";
import "../../App.css";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="">
      <Helmet>
        <title>EliteEstates | Home</title>
      </Helmet>
      <Slider></Slider>
      <div className="max-w-7xl mx-auto">
        <Estates estates={data}></Estates>
      </div>
    </div>
  );
};

export default Home;
