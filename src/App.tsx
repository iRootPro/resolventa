import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Character from "./components/Character";
import {loadState} from "./helpers/localStorage";
import {useDispatch} from "react-redux";
import {restoreFavorites} from "./reducers/character";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        const savedState = loadState()
        if (savedState) {
            dispatch(restoreFavorites(savedState))
        }
    }, [])
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path={'/'}><Character/></Route>
                    <Route path={'/search'}><Character/></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
