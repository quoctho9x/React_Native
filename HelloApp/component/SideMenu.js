// Buoc 1:import thu vien
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Drawer from 'react-native-drawer'
import styles from '../style/style';

//Buoc 2: viec code Class (component):RENDER => khác hàng muốn thấy gì thì render ra cái đó
export default class SideMenu extends Component{

    closeControlPanel = () => {
        this.drawer.close()
    };
    openControlPanel = () => {
        this.drawer.open()
    };
    render(){
        return(
        <View style={{flex:1}}>
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={
                    <View style={{flex:1,backgroundColor:"yellow",}}><Text>aa</Text></View>
                }
            >
                <View style={{flex:1,backgroundColor:"red",padding:50,}}>
                    <TouchableOpacity onPress={()=>this.openControlPanel()}>
                        <Text>open</Text>
                    </TouchableOpacity>

                </View>
            </Drawer>
        </View>

        );
    }
}
//Buoc 3: dang ky (register) COMPONENT chinh
/*=======NOTE============
 -mỗi màng hình là 1 component
 - <View> chinh la the <div> de dinh danh ra cac khu vuc trong project
 - <Text> chinh la the <p>
 =======================*/