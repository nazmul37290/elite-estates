import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();
const Estates = ({ estates }) => {
  return (
    <div className="">
      <h1 className="text-3xl text-center font-bold mt-24">Estates</h1>

      <div>
        {estates.map((estate, i) => {
          const { id, estate_title, price, image, status, area } = estate;
          return (
            <>
              <div
                data-aos={i % 2 == 0 ? "slide-right" : "slide-left"}
                className="h-[350px] w-auto border-black border mt-10 rounded-xl grid grid-cols-5"
              >
                <div className="h-[350px] col-span-2 w-[450px]">
                  <img
                    className="w-full rounded-lg h-full"
                    src={image}
                    alt=""
                  />
                </div>
                <div className="p-10 col-span-3 space-y-4">
                  <h2 className="text-base lg:text-3xl uppercase font-bold">
                    Title: <span>{estate_title}</span>
                  </h2>
                  <p className="text-base lg:text-2xl uppercase font-semibold">
                    Area: <span>{area}</span>
                  </p>
                  <p className="text-base lg:text-2xl uppercase font-semibold">
                    Status: <span>{status}</span>
                  </p>
                  <p className="text-base lg:text-2xl uppercase font-semibold">
                    Price: <span>{price}</span>
                  </p>
                  <Link to={`/estateDetails/${id}`}>
                    <button className="btn mt-5 btn-success text-white text-lg font-bold">
                      View property
                    </button>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Estates;
