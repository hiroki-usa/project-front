import React from "react";
import SearchBar from "./SearchBar";
import Shoplist from "./Shoplist";
import HeaderComponent from "./HeaderComponent";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import Icon from "./pages/icon";
import Top from "./pages/top";
import Profile from "./pages/profile";
import Bookmark from "./pages/bookmark";
import Rireki from "./pages/rireki";
import LoginLogout from "./pages/login_logout";
import Result from "./pages/result";
import Newlist_p from "./pages/newlist_p";


//mport NavigationVar from "./NavigationVar";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <HeaderComponent /> 
                <Router>
                    <Switch>
                    <Route strict exact path="/" component={Top}></Route>
                    <Route strict exact path="/icon" component={Icon}></Route>
                    <Route strict exact path="/profile" component={Profile}></Route>
                    <Route strict exact path="/bookmark" component={Bookmark}></Route>
                    <Route strict exact path="/rireki" component={Rireki}></Route>
                    <Route strict exact path="/login_logout" component={LoginLogout}></Route>
                    <Route strict exact path="/result" component={Result}></Route>
                    <Route strict exact path="/newlist_p" component={Newlist_p}></Route>         
                    </Switch>
                </Router>
                    
            </div>
        );
    }
}