import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import { Home } from '../Pages/Home/Home'
import { Login } from '../Pages/Login/Login'

export default class Index extends Component {
    render() {
        return (
            <div>
                <Route path = "/" exact component = {Home} ></Route>
                <Route path = "/Home" exact component = {Login} ></Route>
                
            </div>
        )
    }
}
