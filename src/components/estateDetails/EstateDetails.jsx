import { useLoaderData, useParams } from "react-router-dom";
import "animate.css";
const EstateDetails = () => {
  const { id } = useParams();
  const estates = useLoaderData();
  const currentEstate = estates.find((estate) => estate.id == id);
  console.log(currentEstate);
  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = currentEstate;
  return (
    <div className="p-24 flex flex-col lg:flex-row gap-5">
      <div className="w-1/2 animate__animated animate__backInLeft">
        <img src={image} className="w-full" alt="" />
      </div>
      <div className="w-1/2 animate__animated animate__backInRight">
        <h1 className="text-4xl mb-4 font-bold">{estate_title}</h1>
        <div className="flex gap-10">
          <p className="text-2xl">
            Type: <span>{segment_name}</span>
          </p>
          <p className="text-2xl">
            Status: <span>{status}</span>
          </p>
        </div>
        <div className="flex mt-2 gap-10">
          <p className="text-2xl">
            Area: <span>{area}</span>
          </p>
          <p className="text-2xl">
            Location: <span>{location}</span>
          </p>
        </div>
        <p className="text-2xl mt-4">
          Facilities:{" "}
          <span>
            {facilities.map((facility, i) => (
              <li key={i}>{facility}</li>
            ))}
          </span>
        </p>
        <p className="text-2xl mt-4">{description}</p>
        <p className="text-3xl mt-4 font-bold">{price}</p>
      </div>
    </div>
  );
};

export default EstateDetails;
