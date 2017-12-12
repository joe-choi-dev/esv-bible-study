import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";
import TodoModel from "./models/TodoModel";
import Home from "./components/Home";

const store = new TodoListModel();

render(
  <div>
      <MuiThemeProvider>
          <Home/>
      </MuiThemeProvider>
    {/*<DevTools />*/}
    {/*<TodoList store={store} />*/}
  </div>,
  document.getElementById("root")
);

store.addTodo("Get Coffee");
store.addTodo("Write simpler code");
store.todos[0].finished = true;

setTimeout(() => {
  store.addTodo("Get a cookie as well");
}, 2000);

// playing around in the console
window.store = store;
