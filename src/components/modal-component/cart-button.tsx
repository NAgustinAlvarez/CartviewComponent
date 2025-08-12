const CartButton = ({ text }: { text: string }) => {
  return (
    <button className="bg-Red rounded-full p-3 text-Rose-50 w-full cursor-pointer hover:bg-Red/80 transition-colors">
      {text}
    </button>
  );
};
export default CartButton;
