import React from "react";
import styled from "styled-components";
import searchImg from "../assets/search.svg";
import printerImg from "../assets/printer.svg";
import { CartTable } from "./CartTable";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 20px 40px 20px 40px;
  border-radius: 8px;
  height: auto;
`;
const TableInfo = styled.div`
  margin: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const CartItemsWrapper = styled.div`
  margin: 10px;
  width: 100%;
`;

const RightSide = styled.div`
  display: flex;
  margin-right: 15px;
`;
const AddButton = styled.button`
  margin: 5px 15px;
  border: 2px solid green;
  height: 30px;
  width: 80px;
  border-radius: 25px;
  color: green;
  font-weight: 700;
  background-color: white;
  cursor: pointer;
`;

const SearchWrapper = styled.div`
  width: 250px;
`;

const SearchInput = styled.input.attrs(() => ({
  type: "text",
  placeholder: "Search...",
}))`
  color: gray;
  font-weight: 550;
  padding: 10px;
  border: 2px solid lightgray;
  float: left;
  width: 80%;
  border-right: none;
  border-radius: 25px 0px 0px 25px;
  outline: none;
`;

const SearchButton = styled.button`
  float: left;
  background-color: white;
  width: 20%;
  padding: 10px;
  border: 2px solid lightgray;
  border-left: none;
  cursor: pointer;
  border-radius: 0px 25px 25px 0px;
`;

const SearchIcon = styled.img.attrs(() => ({
  src: searchImg,
  alt: "search",
}))`
  width: 25px;
  height: 10px;
`;
const PrinterIcon = styled.img.attrs(() => ({
  src: printerImg,
  alt: "printer",
}))`
  width: 2.2rem;
  height: 1.7rem;
  margin: 5px;
  cursor: pointer;
`;

const ProductList = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Wrapper>
        <TableInfo>
          <SearchWrapper>
            <SearchInput />
            <SearchButton>
              <SearchIcon />
            </SearchButton>
          </SearchWrapper>
          <RightSide>
            <AddButton
              onClick={() => {
                const obj = {
                  product_name: "Chicken Breast Fillets, Boneeless Chicken 65",
                  brand: "Hormel Black Labelmany",
                  price: 60.67,
                  quantity: 1,
                  id: Date.now(),
                  status: "",
                  comment: "",
                  old_price: 0,
                  old_quantity: 0
                };
                dispatch(addItem(obj))
              }}
            >
              Add Item
            </AddButton>
            <PrinterIcon />
          </RightSide>
        </TableInfo>
        <CartItemsWrapper>
          <CartTable />
        </CartItemsWrapper>
      </Wrapper>
    </>
  );
};

export default ProductList;
