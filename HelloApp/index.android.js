// Buoc 1:import thu vien
import React,{Component} from 'react';
import {
    AppRegistry,
    StatusBar,
    StyleSheet,
    View,
    Text
} from 'react-native';

//Buoc 2: viec code Class (component):RENDER => khác hàng muốn thấy gì thì render ra cái đó
class HelloApp extends Component{
  //constructor day la ham khoi tao, duoc chay ngay sao khi HelloApp duoc tao ra.
  // khai bao nguon du lieu do ve
  constructor(props){
    super(props);
    console.log('constructor');
  }
  render(){
      console.log('render');
    return(
        <View  style={css.bao}>
            <Text style={css.tieude}>Hello React Native</Text>
            <Text style={css.noidung}>day la demo dau tien ve react native cua minh</Text>
        </View>
    );
  }
}
var css = StyleSheet.create({
  bao:{
    backgroundColor:'pink',
      height:'100%'
  },
    tieude:{
        backgroundColor:'blue',
        color:'red'
    },
    noidung:{
        backgroundColor:'yellow',

    },
});
//Buoc 3: dang ky (register) COMPONENT chinh
AppRegistry.registerComponent('HelloApp', () => HelloApp);
/*=======NOTE============
-mỗi màng hình là 1 component
- <View> chinh la the <div> de dinh danh ra cac khu vuc trong project
- <Text> chinh la the <p>
=======================*/