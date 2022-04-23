import React from "react";
const style = {
  backgroundColor: "blueviolet",
  padding: "40px",
  borderRadius: "10px",
  marginBottom: "40px",
  color: "#ffffff"
};
export const InCompleateTodos = (props) => {
  const { todos, ClickDelete, ClickComplete } = props;

  return (
    <div className="mikanryo" style={style}>
      <p>未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo}>
              <li>
                {todo}
                <button onClick={() => ClickComplete(index)}>完了</button>
                <button onClick={() => ClickDelete(index)}>削除</button>
                {/* そのまま呼び出してしまうとアラートが出てしまうので、関数で呼び出してあげる */}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
