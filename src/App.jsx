import React, { useState } from "react";
import "./styles.css";
import {InputTodo} from "./components/InputTodo";
import {IncompleatTodos} from "./components/IncompleatTodos";
import {CompleatTodos} from "./components/CompleatTodos";

export const App = () => {
  const [todoText, setTodoText] =useState(['']);

  const [incompleatTodos, setIncompleatTodos] = useState([]);

  const [compleatTodos, setCompleatTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos =[...incompleatTodos, todoText];
    setIncompleatTodos(newTodos);
    setTodoText('');
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleatTodos];
    newTodos.splice(index,1);
    setIncompleatTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncomplateTodos = [...incompleatTodos];
    newIncomplateTodos.splice(index, 1);

    const newcomplateTodos = [...compleatTodos, incompleatTodos[index]];
    setIncompleatTodos(newIncomplateTodos);
    setCompleatTodos(newcomplateTodos);
  };

  const onClickBack = (index) => {
    const newComplateTodos = [...compleatTodos];
    newComplateTodos.splice(index, 1);

    const newIncomplateTodos = [...incompleatTodos, compleatTodos[index]];
    setCompleatTodos(newComplateTodos);
    setIncompleatTodos(newIncomplateTodos);
  };

  return (
    <>
      <InputTodo 
        todoText={todoText} 
        onChange={onChangeTodoText} 
        onClick={onClickAdd} 
        disabled={incompleatTodos.length >= 5}
      />
      {incompleatTodos.length >= 5 && (
      <p style={{ color:'red'}}>
        登録できるTODOは5個まです。TODOを消化してください。
        </p>
      )}
      <IncompleatTodos
        todos={incompleatTodos} 
        onClickComplete={onClickComplete} 
        onClickDelete={onClickDelete} 
      />
      <CompleatTodos 
        todos={compleatTodos}
        onClickBack={onClickBack}
      />
    </>
  );
};
