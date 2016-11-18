import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './KanbanBoard';

let cardsList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read it",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Code a lot",
    description: "Code after looking at examples online",
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

ReactDOM.render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
