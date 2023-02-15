import React from "react";
import StyledButton from "../../styledcomp/StyledButton";
import SlideDiv from "../../styledcomp/SlideBarSt";
import DeleteIcon from "@mui/icons-material/Delete";
import BookIcon from "@mui/icons-material/Book";
import { useNavigate } from "react-router-dom";

type Props = {};

const Navig = [
  {
    id: 1,
    title: "List",
    icon: <BookIcon />,
    link: "/list",
  },
  {
    id: 2,
    title: "Trash",
    icon: <DeleteIcon />,
    link: "/trash",
  },
];

const SlideBar = (props: Props) => {
  const navigate = useNavigate();

  return (
    <SlideDiv>
      <h1
        style={{ cursor: "pointer", fontSize: "1.2rem", marginTop: "20px" }}
        onClick={() => navigate("/")}>
        Your Goal
      </h1>
      {Navig.map((item) => (
        <StyledButton key={item.id} onClick={() => navigate(`${item.link}`)}>
          <div>{item.icon}</div>
          {item.title}
        </StyledButton>
      ))}
    </SlideDiv>
  );
};

export default SlideBar;
