// Buoc 1:import thu vien
import React,{Component} from 'react';
import {
    AppRegistry,
    StatusBar,
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity,
} from 'react-native';
import styles from '../android/style';
import { StackNavigator } from 'react-navigation';
import Calculator from './component/calculator'; //goi ra calculator
import Button_default from './component/button'; //goi ra calculator

//Buoc 2: viec code Class (component):RENDER => khác hàng muốn thấy gì thì render ra cái đó
class HelloApp extends Component{
    //constructor day la ham khoi tao, duoc chay ngay sao khi HelloApp duoc tao ra.
    // khai bao nguon du lieu do ve
    constructor(props){
        super(props);
        this.state={
            number:0
        };
    }
    Cong(){
        this.setState({number:this.state.number+1});
    }
    Tru(){
        this.setState({number:this.state.number-1});
    }
    Reset(){
        this.setState({number:0});
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header }>
                    <Text style={ styles.text_header}>Ung dung click Timer</Text>
                </View>
                <View style={styles.contain}>
                    <Text style={styles.text_contain}>{this.state.number}</Text>
                </View>
                <View style={styles.wrap_btn}>
                    <View style={styles.button} >
                        <Text style={ styles.text_button} onPress={()=>{this.Cong()}}>Cong</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={ styles.text_button} onPress={()=>{this.Tru()}} >Tru</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={ styles.text_footer} onPress={()=>{this.Reset()}}>Reset</Text>
                </View>
            </View>
        );
    }
}

//Buoc 3: dang ky (register) COMPONENT chinh
AppRegistry.registerComponent('HelloApp', () => HelloApp);
/*=======NOTE============
 -mỗi màng hình là 1 component
 - <View> chinh la the <div> de dinh danh ra cac khu vuc trong project
 - <Text> chinh la the <p>
 =======================*/