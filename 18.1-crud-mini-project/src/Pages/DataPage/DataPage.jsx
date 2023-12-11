import { getData } from "../../Contexts/DataContext";

export default function DataPage() {
  const { data } = getData();
  console.log(data);

  return <main className="DataPage"></main>;
}
