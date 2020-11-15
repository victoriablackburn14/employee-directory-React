import React, {Component} from 'react';
import "../styles/Header.css";

export default class Header extends Component {
    render(){
        return(
            <div className="header">
                <h1>Employees</h1>
                <p>Click to filter by heading or use the search bar</p>
            </div>
        )
    }
}