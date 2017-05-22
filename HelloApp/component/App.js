// Buoc 1:import thu vien
import React,{Component} from 'react';
import {
    Image,
    AppRegistry,
    StatusBar,
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity,
} from 'react-native';
import styles from '../style/style';
import HomeScreen from './homeScreen';
import ChatScreen from './chatScreen';

import { StackNavigator } from 'react-navigation';
import Calculator from './calculator'; //goi ra calculator
import Button_default from './button'; //goi ra calculator
import SideMenu from './SideMenu'; //goi ra calculator
import AsyncStorageDemo from './AsyncStorage'; //goi ra calculator
import TabBar from './TabBar'; //goi ra calculator
import Login from './login'; //goi ra calculator

//Buoc 2: viec code Class (component):RENDER => khác hàng muốn thấy gì thì render ra cái đó
export default class Main extends Component{
    //constructor day la ham khoi tao, duoc chay ngay sao khi HelloApp duoc tao ra.
    // khai bao nguon du lieu do ve
    constructor(props){
        super(props);
        this.state={
            number:0
        };
    }
    render(){
        return(
            <View style={{flex:1}}>
                {/*<SimpleApp/>*/}
                {/*<SideMenu/>*/}
               {/* <AsyncStorageDemo/>*/}
                <Login/>
            </View>
        );
    }
}
const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
});
