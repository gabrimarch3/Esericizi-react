import CarDetails from "./CarDetails";

function Car() {
  let initialData = {
    name: "opel",
    model: "corsa",
    year: "2011",
    color: "blu",
  };

  return <CarDetails initialData={initialData} />;
}
export default Car;
