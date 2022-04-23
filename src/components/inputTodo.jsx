import React from "react";
export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;

  return (
    <div className="inputArea">
      <input
        disabled={disabled}
        placeholder="TODOを追加"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
