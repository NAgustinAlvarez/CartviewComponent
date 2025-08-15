import { create } from "zustand";

export type Item = { name: string; price: number; newQuantity: number };
type Store = {
  isClose: boolean;
  cart: Item[];
  toggleClose: () => void;
  addItemCart: (newItem: Item) => void;
  updateItemInCart: (updateItem: Item) => void;
  deleteItemFromCart: (deleteItem: string) => void;
  //   resetItemFromCart: (resetItem: string) => void;
};

export const cartStore = create<Store>((set) => ({
  isClose: true,
  toggleClose: () => set((state) => ({ isClose: !state.isClose })),
  cart: [],
  addItemCart: (newItem: Item) =>
    set((state) => ({ cart: [...state.cart, newItem] })),
  updateItemInCart: (updateItem: Item) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.name == updateItem.name ? { ...updateItem } : item
      ),
    })),
  deleteItemFromCart: (deleteItem: string) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.name !== deleteItem),
    })),
  // resetItemFromCart: (resetItem: string) =>
  //   set((state) => ({
  //     cart: state.cart.map((item) => item.name == resetItem ? {...item, newQuantity: 0} : item),
  //   })),
}));

// function Counter() {
//   const { count, inc } = useStore()
//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={inc}>one up</button>
//     </div>
//   )
// }
