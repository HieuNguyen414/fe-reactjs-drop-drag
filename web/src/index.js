import React from "react";
import ReactDOM from "react-dom";
import Board from "@lourenci/react-kanban";

const board = {
  columns: [
    {
      id: 1,
      title: "List1",
      cards: [
        {
          id: 1,
          title: "Title 1",
        },
        {
          id: 2,
          title: "Title 2",
        },
        {
          id: 3,
          title: "Title 3",
        },
        {
          id: 4,
          title: "Title 4",
        },
        {
          id: 5,
          title: "Title 5",
        },
      ]
    },
    {
      id: 2,
      title: "List2",
      cards: [

      ]
    }
  ]
};

const UncontrolledBoard = (props) => {
  console.log(props);
  return (
    <Board
      initialBoard={props.data}
      onNewCardConfirm={draftCard => ({
        id: new Date().getTime(),
        ...draftCard
      })}
      onCardDragEnd={ss => {
        console.log(ss)
      }}
      onCardNew={console.log(board)}
    />
  );
}

function App() {
  return (
    <>
      <h4>Example</h4>
      <UncontrolledBoard data={board} />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
