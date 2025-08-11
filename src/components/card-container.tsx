import ProductCard from "./product-card";
import data from "../../data.json";
const CardContainer = () => {
  return (
    <div className="grid gap-6 mb-6">
      {data.map((item, index) => (
        <ProductCard key={index} item={item}></ProductCard>
      ))}
    </div>
  );
};

export default CardContainer;
