const CartConfirmItem = () => {
  return (
    <div className=" text-sm ">
      <div className="flex items-center  px-6 py-3  justify-between border-2 border-transparent border-b-Rose-300">
        <div className="flex gap-4">
          <img
            src="\assets\images\image-waffle-mobile.jpg"
            className="size-[50px] rounded-sm"
          ></img>
          <div>
            <h3 className="font-semibold mb-1">Vanilla Panna</h3>
            <div className="flex flex-row gap-2 ">
              <p className="text-Red font-semibold">2x</p>
              <p className="text-Rose-500">@$6.50</p>
            </div>
          </div>
        </div>
        <p className="font-semibold text-[1rem]"> $13.50</p>
      </div>
    </div>
  );
};

export default CartConfirmItem;
