import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import DevTools from "mobx-react-devtools";
import { HashRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BibleBooks from "./components/BibleBooks.jsx";
import BibleFlashcards from "./components/BibleFlashcards.jsx";
import BibleFlashcardVerses from "./components/BibleFlashcardVerses.jsx";
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
                                <Route path="/key_verses" component={BibleFlashcardVerses} />
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
