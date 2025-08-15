import type { Item } from "../zustand/cart-store";
import { cartStore } from "../zustand/cart-store";
const CardItem = ({ item }: { item: Item }) => {
  const { deleteItemFromCart } = cartStore();
  return (
    <div className="border border-transparent border-b-Rose-100 text-sm py-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <div className="flex flex-row gap-2 ">
            <p className="text-Red font-semibold">{item.newQuantity}x</p>
            <p className="text-Rose-500">@${item.price}</p>
            <p className="font-semibold text-Rose-500">$13.50</p>
          </div>
        </div>
        <img
          src="\assets\images\icon-remove-item.svg"
          className="size-[18px] border border-Rose-300 rounded-full p-0.5 cursor-pointer"
          onClick={() => {
            deleteItemFromCart(item.name);
          }}
        ></img>
      </div>
    </div>
  );
};

export default CardItem;
