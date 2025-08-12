import CardItem from "./card-items";

const CartComponent = () => {
  return (
    <div className="p-6 rounded-xl bg-Rose-50">
      <h2 className="text-Red font-bold text-xl">Your Cart (2)</h2>
      <CardItem />
      <CardItem />
      <CardItem />
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
      <button className="bg-Red rounded-full p-3 text-Rose-50 w-full cursor-pointer hover:bg-Red/0 transition-colors">
        Confirm Order
      </button>
    </div>
  );
};

export default CartComponent;
