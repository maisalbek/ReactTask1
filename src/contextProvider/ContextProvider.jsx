import axios from "axios";
import React, { createContext, useReducer } from "react";

const API = "http://localhost:8000/posts";

export const todoContext = createContext();

const INIT_STATE = {
  product: [],
  forEdit: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, product: action.payload };
    case "GET_ONE_EDIT":
      return { ...state, forEdit: action.payload };
    default:
      return state;
  }
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getTodos() {
    try {
      let { data } = await axios(API);
      console.log(data);
      dispatch({
        type: "GET_PRODUCT",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const addNewTodo = async (newTodo) => {
    try {
      let { data } = await axios.post(API, newTodo);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  const getOneTodoForEdit = async (id) => {
    try {
      let { data } = await axios(`${API}/${id}`);
      dispatch({
        type: "GET_ONE_EDIT",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const saveEdit = async (editedTodo) => {
    try {
      let res = await axios.patch(`${API}/${editedTodo.id}`, editedTodo);
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <todoContext.Provider
      value={{
        product: state.product,
        forEdit: state.forEdit,
        deleteTodo,
        addNewTodo,
        getTodos,
        getOneTodoForEdit,
        saveEdit,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default ContextProvider;
