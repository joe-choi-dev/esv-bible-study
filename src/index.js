import React from "react";
import ReactDOM from 'react-dom';
import DevTools from "mobx-react-devtools";
import { HashRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";
import TodoModel from "./models/TodoModel";
import Home from "./components/Home";
import AppBar from 'material-ui/AppBar';
import HelloWorld from './components/HelloWorld'
const store = new TodoListModel();

class App extends React.Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="CMU Klesis"
                            iconClassNameRight="muidocs-icon-navigation-expand-more"
                        />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path="/hello" component={HelloWorld} />
                        </Switch>
                    </div>
                </MuiThemeProvider>
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
