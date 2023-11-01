import React, { useState } from "react";
import "./styles.css";

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
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incompleat-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleatTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="compleat-area">
        <p className="title">完了のTODO</p>
        <ul>
          {compleatTodos.map((todo,index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
