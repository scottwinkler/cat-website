import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, {Component} from 'react';
import './Nav.css';
import Menu from './Menu/Menu.js';
import HomeButton from './HomeButton/HomeButton.js';
import Welcome from './Welcome/Welcome.js';

export default class Nav extends Component{
    render(){
        return(
            <div className="Nav">
                <ul className="Nav-ul">
                    <HomeButton push={this.props.push}/>
                    <Menu push={this.props.push} username={this.props.username}/>
                    <Welcome push={this.props.push} isAuthenticated={this.props.isAuthenticated} username={this.props.username} logout={this.props.logout}/>
                </ul>
            </div>
        )
    }
}