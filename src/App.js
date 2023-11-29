import CartTopSection from "./components/CartTopSection";
import Navbar from "./components/Navbar";
import OrderInfo from "./components/OrderInfo";
import styled from "styled-components";
import ProductList from "./components/ProductList";

const Section = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e3e2e1;
`;

function App() {
  return (
    <>
      <Section>
        <Navbar />
        <CartTopSection />
        <OrderInfo />
        <ProductList />
      </Section>
    </>
  );
}

export default App;
