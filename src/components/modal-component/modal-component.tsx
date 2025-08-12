import CartButton from "./cart-button";
import CartConfirmItem from "./cart-confimItem";
import CartTotal from "./cart-total";
const ModalComponent = () => {
  return (
    <dialog className="bg-black/50 w-full fixed h-screen grid place-content-center">
      <div className=" w-[375px] md:w-[688px] py-10 px-6 bg-Rose-50 rounded-xl mt-10 mb-10">
        <img src="/assets/images/icon-order-confirmed.svg"></img>
        <h2 className="text-[2.5rem] font-bold">Order Confirmed</h2>
        <p className="text-[1rem] text-Rose-300 mb-6">
          We hope you enjoy your food!
        </p>
        <div className=" bg-Rose-100 rounded-sm pt-6 mt-3.5">
          <CartConfirmItem />
          <CartConfirmItem />
          <CartConfirmItem />
          <CartTotal />
        </div>
        <div className="mt-8">
          <CartButton text="Start new order" />
        </div>
      </div>
    </dialog>
  );
};

export default ModalComponent;
