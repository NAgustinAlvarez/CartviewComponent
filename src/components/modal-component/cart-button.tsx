const CartButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <button
      className="bg-Red rounded-full p-3 text-Rose-50 w-full cursor-pointer hover:bg-Red/80 transition-colors"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default CartButton;
// className="bg-Red rounded-full p-3 text-Rose-50 w-full cursor-pointer hover:bg-Red/0 transition-colors"
