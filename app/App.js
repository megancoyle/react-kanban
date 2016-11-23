import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import KanbanBoardContainer from './KanbanBoardContainer';

let cardsList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should **read** it",
    color: '#BD8D31',
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Code a lot",
    description: "Code after looking at examples online at [github](http://github.com)",
    color: '#3A7E28',
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "Todo Example",
        done: true,
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
        id: 3,
        name: "My own work",
        done: false
      }
    ]
  },
];

ReactDOM.render(
  <KanbanBoardContainer cards={cardsList} />,
  document.getElementById('root')
);
