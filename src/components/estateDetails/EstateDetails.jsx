import { useParams } from "react-router-dom";

const EstateDetails = () => {
  const { id } = useParams();
  return (
    <div className="flex items-center justify-center h-screen ">
      <h1 className=""> This is Estate details page :{id}</h1>
    </div>
  );
};

export default EstateDetails;
