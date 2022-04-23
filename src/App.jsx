import "./styles.css";
import React, { useState } from "react";
import { InputTodo } from "./components/inputTodo";
import { InCompleateTodos } from "./components/inCompleateTodos";
import { CompleateTodos } from "./components/CompleateTodos";

export const App = () => {
  const [incompleateTodos, setIncompleateTodos] = useState([]);

  const [compleateTodos, setCompleateTodos] = useState([]);

  const [todoText, setTodoText] = useState([]);

  const onChangeToDoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleateTodos, todoText];
    setIncompleateTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleateTodos];
    newTodos.splice(index, 1);
    // splice:指定されたindexから要素を第二引数の数だけ削除するメソッド
    setIncompleateTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleateTodos = [...incompleateTodos];
    newIncompleateTodos.splice(index, 1);
    const newCompleateTodos = [...newIncompleateTodos, incompleateTodos[index]];
    setIncompleateTodos(newIncompleateTodos);
    setCompleateTodos(newCompleateTodos);
  };

  const onClickBack = (index) => {
    const newCompleateTodos = [...compleateTodos];
    newCompleateTodos.splice(index, 1);
    const newIncompleateTodos = [...incompleateTodos, compleateTodos[index]];
    setIncompleateTodos(newIncompleateTodos);
    setCompleateTodos(newCompleateTodos);
  };

  const style = {
    color: "blue"
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeToDoText}
        onClick={onClickAdd}
        disabled={incompleateTodos.length >= 5}
      />
      {incompleateTodos.length >= 5 && (
        <p style={style}>消化できるものあるやん？？？？？</p>
      )}
      <InCompleateTodos
        todos={incompleateTodos}
        ClickDelete={onClickDelete}
        ClickComplete={onClickComplete}
      />
      <CompleateTodos todos={compleateTodos} onClickBack={onClickBack} />
    </>
  );
};
