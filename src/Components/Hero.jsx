import { Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GetProuducts } from "../Redux/Slices/Products";
import Layout from "./Layout/Layout";

const Hero = () => {
  const dispatch = useDispatch();
  const { allProducts, status } = useSelector((state) => state?.Prouducts);
  React.useEffect(() => {
    dispatch(GetProuducts());
  }, []);
  console.log("allProducts, status", allProducts, status);
  return (
    <BigSection>
      {status === "success" ? (
        <>
          <Grid container columns={12} alignItems="stretch">
            {allProducts.map((e) => {
              return (
                <Grid item xs={12} md={4} sm={6}>
                  {" "}
                  <Layout product={e}></Layout>
                </Grid>
              );
            })}
          </Grid>
          {/* {allProducts.map((e) => {
            return <Layout product={e}></Layout>;
          })} */}
        </>
      ) : (
        <></>
      )}

      {status === "loading" ? (
        <Loading>
          <h1>Loading...</h1>
        </Loading>
      ) : (
        <></>
      )}
    </BigSection>
  );
};
const BigSection = styled.div`
  /* padding: 1rem; */
`;
const Loading = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Hero;
