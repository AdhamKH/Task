import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
const Layout = ({ product }) => {
  return (
    <LayoutStyle>
      <div className="card">
        <img src={product?.img} alt="Denim Jeans" />
        <h3>{product?.name}</h3>
        <p className="price">
          {product?.price ? <>${product?.price}</> : <p>Price unavailable</p>}{" "}
        </p>
        <p>Dicount: ${product?.discount}</p>
        <p>
          <Button startIcon={<ShoppingCartIcon></ShoppingCartIcon>}>
            Add to Cart
          </Button>
        </p>
      </div>
    </LayoutStyle>
  );
};
const LayoutStyle = styled.div`
  padding: 1rem;

  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
    img {
      width: 100%;
      transition: 0.3s all;
      &:hover {
        transform: translateY(-4px) scale(1.1);
      }
    }
  }

  .price {
    color: grey;
    font-size: 22px;
  }

  .card button {
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
    &:hover {
      opacity: 0.7;
      background-color: green;
    }
  }
`;

export default Layout;
