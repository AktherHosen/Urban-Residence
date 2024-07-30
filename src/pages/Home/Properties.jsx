import { useLoaderData } from "react-router-dom";
import PropertiesCard from "./PropertiesCard";
import "animate.css";

const Properties = () => {
  const estates = useLoaderData();
  return (
    <div className="p-4">
      <div className="text-center my-6">
        <h1 className=" animate__animated animate__fadeInDown animate__delay-1s animate__repeat-2  text-xl font-exo text-vsecondary font-semibold">
          Latest Properties
        </h1>
        <p>List and order properties as you wish</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {estates.map((estate) => (
          <PropertiesCard key={estate.id} estate={estate}></PropertiesCard>
        ))}
      </div>
    </div>
  );
};

export default Properties;
