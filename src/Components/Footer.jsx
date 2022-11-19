import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <BigSection>
      <Grid container columns={12}>
        <Grid item xs={12} md={6}  lg={4}>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Home</Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}  lg={4}>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Home</Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}  lg={4}>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Home</Link>
            </li>
          </ul>
        </Grid>
      </Grid>
    </BigSection>
  );
};
export const BigSection = styled.div`
  background-color: #1976d2;
  text-align: center;
  ul {
    list-style: none;
    padding-left: 16px;
    a {
      color: white;
      text-decoration: none;
    }
    li {
      padding: 1rem 0;
    }
  }
`;

export default Footer;
