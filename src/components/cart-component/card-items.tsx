const CardItems = () => {
  return (
    <div className="flex">
      <div className="mb-6 space-y-2 flex-1 ">
        <p className="font-semibold text-Rose-900 text-[15px]">
          Classic Tiramisu
        </p>
        <p className="flex gap-3 items-center text-[15px]">
          <span className="text-Red font-bold "> 2x </span> @ $6.50
          <span className="text-Rose-500 font-semibold"> $13.00</span>
        </p>
        <hr className="text-Rose-100" />
      </div>
      <div className="pt-3.5">
        <img
          src="\assets\images\icon-remove-item.svg"
          className="border-2 border-Rose-300 p-0.5 rounded-full size-5"
        ></img>
      </div>
    </div>
  );
};

export default CardItems;
