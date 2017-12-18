import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import DevTools from "mobx-react-devtools";
import { HashRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import TodoList from "./components/TodoList";
// import TodoListModel from "./models/TodoListModel";
// import TodoModel from "./models/TodoModel";
import BibleBooks from "./components/BibleBooks.jsx";
import BibleFlashcards from "./components/BibleFlashcards.jsx";
import Home from "./components/Home.jsx";
import globalStore from './GlobalStore.js';
import MenuAppBar from "./components/material/MenuAppBar.jsx";

import { createMuiTheme } from 'material-ui/styles';
import lightBlue from 'material-ui/colors/lightBlue';
import green from 'material-ui/colors/green';

const theme = createMuiTheme({
    palette: {
        primary: lightBlue,
        secondary: green,
    },
    status: {
        danger: 'orange',
    },
});

// const store = new TodoListModel();

class App extends React.Component {
    render() {
        return (
            <div>
                <Provider globalStore={globalStore}>
                    <MuiThemeProvider theme={theme}>
                        <div>
                            <MenuAppBar/>
                            <Switch>
                                <Route exact path='/' component={BibleBooks} />
                                <Route path="/home" component={Home} />
                                <Route path="/flashcards" component={BibleFlashcards} />
                            </Switch>
                        </div>
                    </MuiThemeProvider>
                </Provider>
            </div>
        );
    }
}

ReactDOM.render(
    (<HashRouter>
        <App />
    </HashRouter>),
    document.getElementById('root')
);

// render(
//   <div>
//       <MuiThemeProvider>
//           <div>
//               <Switch>
//                   <Route exact path='/' component={Home} />
//               </Switch>
//           </div>
//       </MuiThemeProvider>
//     {/*<DevTools />*/}
//     {/*<TodoList store={store} />*/}
//   </div>,
//   document.getElementById("root")
// );

store.addTodo("Get Coffee");
store.addTodo("Write simpler code");
store.todos[0].finished = true;

setTimeout(() => {
  store.addTodo("Get a cookie as well");
}, 2000);

// playing around in the console
window.store = store;
