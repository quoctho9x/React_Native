import React,{Component} from  'react';
import {
        View,
        Text,
    StatusBar,
} from  'react-native';
import {SideMenu} from './Router';
StatusBar.setHidden(false);

export default class App extends Component{
    render(){
        return(
            <SideMenu/>
        )
    }
}