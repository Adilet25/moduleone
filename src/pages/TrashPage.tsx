import React from "react";
import { Container } from "../styledcomp/Container";
import SlideBar from "../components/SlideBar/SlideBar";

type Props = {};

const TrashPage = (props: Props) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SlideBar />
      <Container>trash</Container>
    </div>
  );
};

export default TrashPage;
