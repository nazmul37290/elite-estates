import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <h2 className="text-2xl font-bold ">Your requested page not found</h2>
      <div className="w-[600px] h-[500px]">
        <img className="w-full h-full" src="/error.jpg" alt="aaaa" />
      </div>
      <Link to={"/"}>
        <button className="btn btn-primary text-lg font-bold">
          Go back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
