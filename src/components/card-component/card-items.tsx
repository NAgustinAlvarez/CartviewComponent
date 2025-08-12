const CardItem = () => {
  return (
    <div className="border border-transparent border-b-Rose-100 text-sm py-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">Vanilla Panna</h3>
          <div className="flex flex-row gap-2 ">
            <p className="text-Red font-semibold">2x</p>
            <p className="text-Rose-500">@$6.50</p>
            <p className="font-semibold text-Rose-500">$13.50</p>
          </div>
        </div>
        <img
          src="\assets\images\icon-remove-item.svg"
          className="size-[18px] border border-Rose-300 rounded-full p-0.5 cursor-pointer"
        ></img>
      </div>
    </div>
  );
};

export default CardItem;
