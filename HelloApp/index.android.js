// Buoc 1:import thu vien
import React,{Component} from 'react';
import {
    AppRegistry,
    View,
} from 'react-native';
import HelloApp from './component/App';
import SideMenu from './component/SideMenu';

//Buoc 2: viec code Class (component):RENDER => khác hàng muốn thấy gì thì render ra cái đó
class Main extends Component{
  render(){
    return(
        <View>

        </View>
    );
  }
}

//Buoc 3: dang ky (register) COMPONENT chinh
AppRegistry.registerComponent('Main', () => Main);
/*=======NOTE============
-mỗi màng hình là 1 component
- <View> chinh la the <div> de dinh danh ra cac khu vuc trong project
- <Text> chinh la the <p>
=======================*/