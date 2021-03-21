import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Character from "./components/Character";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path={'/'} ><Character/></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
