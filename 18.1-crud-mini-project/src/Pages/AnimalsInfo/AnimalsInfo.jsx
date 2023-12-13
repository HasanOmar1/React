import "./AnimalsInfo.css";
import { useLocation } from "react-router-dom";

export default function AnimalsInfo() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="AnimalsInfo ">
      <h1>{location.state?.animals.name}</h1>
      <img
        src={location.state?.animals.avatar}
        alt={location.state?.animals.name}
      />
    </div>
  );
}
