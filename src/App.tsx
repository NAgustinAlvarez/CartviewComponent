/* eslint-disable @typescript-eslint/no-unused-vars */
import CardContainer from "./components/card-container/card-container";
import CartComponent from "./components/cart-component/cart-component";
import ModalComponent from "./components/modal-component/modal-component";

function App() {
  return (
    <main className="flex justify-center font-Red">
      <section className="my-6">
        <h1 className=" text-[40px] font-bold  mb-[30px]">Desserts</h1>
        <div className="desktop:flex desktop:gap-8">
          <CardContainer />
          <CartComponent />
        </div>
      </section>
      <ModalComponent />
    </main>
  );
}

export default App;
