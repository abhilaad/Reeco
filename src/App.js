import CartTopSection from "./components/CartTopSection";
import Navbar from "./components/Navbar";
import OrderInfo from "./components/OrderInfo";
import styled from "styled-components";
import ProductList from "./components/ProductList";
import { useEffect, useState } from "react";
import { getCartDataApi } from "./apiCall/networkRequest";
import {useDispatch} from "react-redux"
import { setInitialData } from "./redux/cartSlice";

const Section = styled.div`
  width: 100%;
  height: auto;
  background-color: #f5f2f2;
`;
const Loading = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
`

function App() {  
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    getCartDataApi().then((res)=>{
      if(res?.data?.length > 0){        
        dispatch(setInitialData(res.data))
      }
    }).catch((err)=>{      
      console.log(err)
    }).finally(()=>{
      setLoading(false)
    })
  },[])
  return (
    <>
      <Section>
        <Navbar />
        {loading ? <Loading>Mocking Api Call...</Loading> : (<>
          <CartTopSection />
        <OrderInfo />
        <ProductList />
        </>)}
      </Section>
    </>
  );
}

export default App;
