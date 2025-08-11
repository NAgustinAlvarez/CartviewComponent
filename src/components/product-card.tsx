import { useState } from "react";
type ImageSet = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

type SingleItem = {
  image: ImageSet;
  name: string;
  category: string;
  price: number;
};

const ProductCard = ({ item }: { item: SingleItem }) => {
  const [quantity, setQuantity] = useState(0);
  const addOne = () => {
    setQuantity(quantity + 1);
  };
  const sustractOne = () => {
    setQuantity(quantity - 1);
  };
  return (
    <div className="relative">
      <picture>
        <source media="(min-width: 1024px)" srcSet={item.image.desktop} />
        <source media="(min-width: 768px)" srcSet={item.image.tablet} />
        <source media="(min-width: 480px)" srcSet={item.image.mobile} />
        <img
          src={item.image.mobile}
          alt={item.name}
          className="rounded-lg mb-[38px]"
        ></img>
      </picture>

      {quantity === 0 ? (
        <button
          className="bg-Rose-50 border-2 border-Rose-300 w-40 rounded-full flex justify-center gap-2 p-3 absolute right-0 left-0 mx-auto top-[190px] hover:border-Red  transition-colors "
          onClick={addOne}
        >
          <img src="\assets\images\icon-add-to-cart.svg"></img>
          <span>Add to cart</span>
        </button>
      ) : (
        <div className=" bg-Red border-2 border-Rose-300 w-40 rounded-full flex gap-2 p-3 absolute right-0 left-0 mx-auto top-[190px] space-x-3.5 justify-between items-center cursor-pointer">
          <img
            src="\assets\images\icon-decrement-quantity.svg "
            className="border border-Rose-50 size-[18px] rounded-full p-1"
            onClick={sustractOne}
          ></img>
          <p className="text-rose-50">{quantity}</p>
          <img
            src="\assets\images\icon-increment-quantity.svg "
            className="border border-Rose-50 size-[18px] rounded-full p-1"
            onClick={addOne}
          ></img>
        </div>
      )}
      {/* */}

      <p className="text-Rose-500 text-sm">{item.category}</p>
      <h2 className="font-bold">{item.name}</h2>
      <p className="text-Red font-semibold">{`$ ${item.price}`}</p>
    </div>
  );
};

export default ProductCard;
// incet-x-0 = left-0 right-0
