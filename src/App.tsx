import CardContainer from "./components/card-container";
import CartComponent from "./components/cart-component/cart-component";
function App() {
  return (
    <main className="flex justify-center font-Red">
      <section className="w-[327px] my-6">
        <h1 className=" text-[40px] font-bold  mb-[30px]">Desserts</h1>
        <CardContainer />
        <CartComponent />
      </section>
    </main>
  );
}

export default App;
