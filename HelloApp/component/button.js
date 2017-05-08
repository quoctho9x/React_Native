// Buoc 1:import thu vien
import React,{Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
//Buoc 2: viec code Class (component):RENDER => khác hàng muốn thấy gì thì render ra cái đó
export default class Button_default extends Component{
    //constructor day la ham khoi tao, duoc chay ngay sao khi HelloApp duoc tao ra.
    // khai bao nguon du lieu do ve
    constructor(props){
        super(props);
    }
    clickMe(){
        console.log('hello in class Button_default')
    }
    render(){
        return(
            <View>
                <TouchableOpacity onPress={()=>{this.clickMe()}}>
                    <View style={ao.btn}></View>
                </TouchableOpacity>
            </View>
        );
    }
}
let ao = StyleSheet.create({
    btn:{backgroundColor:'green',width:50,height:25,marginTop:100}
});

