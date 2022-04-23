import React from "react";
export const CompleateTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="done">
      <p>完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo}>
              <li>
                {todo}
                <button onClick={() => onClickBack(index)}>戻す</button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
