import CardItem from "./cart-items";
import { cartStore } from "../zustand/cart-store";
import CartButton from "../modal-component/cart-button";
const CartComponent = () => {
  const { toggleClose, cart } = cartStore();
  return (
    <div className="p-6 rounded-xl bg-Rose-50">
      <h2 className="text-Red font-bold text-xl">Your Cart (2)</h2>
      {cart.map((item) => (
        <CardItem item={item} key={item.name} />
      ))}

      <div className="flex justify-between items-center mb-6">
        <p className="text-sm">Order Total</p>
        <p className="text-2xl font-bold">$46.50</p>
      </div>
      <div className="bg-rose-50 rounded-lg flex p-4 text-sm gap-2 justify-center mb-6">
        <img src="\assets\images\icon-carbon-neutral.svg"></img>
        <p>
          This is a <span className="font-bold">carbon-neutral</span> delivery
        </p>
      </div>
      <CartButton text="Confirm Order" onClick={toggleClose} />
    </div>
  );
};

export default CartComponent;
