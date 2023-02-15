import React from "react";
import { Container } from "../styledcomp/Container";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Grid } from "@mui/material";

type Props = {};

const ROUND_GRAD = [
  {
    xs: 9,
    wh: "300px",
  },
  {
    xs: 7,
    wh: "500px",
  },
  {
    xs: 4,
    wh: "100px",
  },
];

const HomePage = (props: Props) => {
  const navigate = useNavigate();

  let whr = "0";

  const BgColor = keyframes`
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 0% 100%;
    }
`;

  const ContainerGr = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    filter: blur(100px);
    background: linear-gradient(45deg, #ccfbff, #ef96c5, #d1c6f3, #d383fa);
    background-size: 600% 600%;
    animation: 30s ${BgColor} infinite;
    position: relative;
  `;

  return (
    <>
      <Container>
        <Grid container spacing={12}>
          {ROUND_GRAD.map((item) => (
            <Grid
              item
              xs={item.xs}
              sx={{ mx: "auto", width: `${item.wh}`, height: `${item.wh}` }}>
              <ContainerGr onLoad={() => console.log("fafaf")} />
            </Grid>
          ))}
        </Grid>

        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          }}>
          <h1>One step to you Goal!</h1>
          <Button
            onClick={() => navigate("/list")}
            variant="text"
            sx={{ top: "1.2rem", color: "#e100ff" }}>
            Get Started
          </Button>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
