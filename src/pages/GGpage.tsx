import React, { useState } from "react";
import { Container } from "../styledcomp/Container";
import SlideBar from "../components/SlideBar/SlideBar";
import TDblock from "../styledcomp/TDblock";
import styled, { keyframes } from "styled-components";
import { Box, Modal, Typography } from "@mui/material";
import { connect } from "react-redux";
import { addTodos, removeTodos } from "../redux/reducer";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  removeTodo(id: any): void;
  todos: any;
  addTodo(arg0: { id: number; item: string; completed: boolean }): unknown;
};

// Styled component

const AddButton = styled.button`
  height: 2rem;
  border-radius: 25px;
  border: none;
  transition: 0.5s;

  :hover {
    transition: 0.5s;
    background: #cbcaca;
  }
`;

const AddBtn2 = styled.button`
  height: 3rem;
  width: 3rem;
  border-radius: 10px;
  background-color: #eaeaea;
  border: none;
  transition: 0.6s;

  :hover {
    transition: 0.6s;
    box-shadow: 0px 3px 10px gray;
  }
`;

const AddInp = styled.input`
  height: 3rem;
  width: 70%;
  padding: 0 1rem;
  border-radius: 10px;
  border: 1px solid gray;
  transition: 0.6s;

  :focus {
    transition: 0.6s;

    box-shadow: 0px 3px 10px gray;
  }
`;

// mui styles

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

//!redux

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
  };
};

const GGpage = (props: Props) => {
  const API = "http://localhost:8000/allTD";

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SlideBar />
        <Container>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
            }}>
            <TDblock>
              <h2 style={{ fontSize: "1.2rem" }}>To Do List</h2>
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  width: "70%",
                  height: "85%",
                  display: "flex",
                  flexDirection: "column",
                  margin: "20px auto",
                }}>
                <AddButton onClick={handleOpen}>+</AddButton>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description">
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2">
                      Add To Do
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Be closer to you GOAL!
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                      <AddInp
                        type="text"
                        placeholder="Add step by step To Do's."
                        onChange={(e) => handleChange(e)}
                      />
                      <AddBtn2
                        onClick={() => {
                          handleClose();
                          props.addTodo({
                            id: Math.floor(Math.random() * 1000),
                            item: todo,
                            completed: false,
                          });
                        }}>
                        Add
                      </AddBtn2>
                      <button onClick={() => console.log(todo)}>fff</button>
                    </div>
                  </Box>
                </Modal>
                <ul>
                  {props.todos.map((item) => {
                    return (
                      <li
                        key={item.id}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                        {item.item}{" "}
                        <DeleteIcon
                          onClick={() => props.removeTodo(item.id)}
                          style={{ cursor: "pointer" }}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TDblock>
          </div>
        </Container>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(GGpage);
