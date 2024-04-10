import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Slider from "../slider/Slider";

const Home = () => {
  const { a } = useContext(AuthContext);
  console.log(a);
  return (
    <div>
      <Slider></Slider>
    </div>
  );
};

export default Home;
