import ProductCard from "./product-card";
import data from "../../data.json";
const CardContainer = () => {
  return (
    <div className="grid md:grid-cols-3 lg gap-6 mb-6  w-[327px] md:w-[688px]">
      {data.map((item, index) => (
        <ProductCard key={index} item={item}></ProductCard>
      ))}
    </div>
  );
};

export default CardContainer;
