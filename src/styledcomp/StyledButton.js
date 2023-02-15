import styled, { keyframes } from "styled-components";

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  padding-right: 5vmax;
  margin-top: 2vmax;
  width: 15vmax;
  height: 2.7vmax;
  background: rgba(0, 0, 0, 0);
  border: none;
  transition: 0.8s;
  border-radius: 20px;

  :hover {
    transition: 0.5s;
    /* background: linear-gradient(
      45deg,
      rgba(204, 251, 255, 40%),
      rgba(239, 150, 197, 40%)
    ); */
    background: #000;
    color: white;
    background-size: 300% 500%;
    /* backdrop-filter: blur(20px); */
    box-shadow: 0px 3px 4px #e7dee5;
  }

  :active {
    background: #000;
    color: white;
  }
`;

export default StyledButton;
