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
import { StackNavigator } from 'react-navigation';
import Calculator from './component/calculator'; //goi ra calculator
import Button_default from './component/button'; //goi ra calculator
//Buoc 2: viec code Class (component):RENDER => khác hàng muốn thấy gì thì render ra cái đó
class HelloApp1 extends Component{
  //constructor day la ham khoi tao, duoc chay ngay sao khi HelloApp duoc tao ra.
  // khai bao nguon du lieu do ve
  constructor(props){
    super(props);
  }
    renderScene(route,navigator){
      switch (route.name){
          case "do": return(<ManHinhDo />);
          case "vang": return(<ManHinhVang />);
      }
    }
  render(){
    return(
        <Navigator initialRoute={{name:'do'}}
                   renderScene={this.renderScene}
        />
    );
  }
}

class ManHinhDo extends Component{
    render(){
        return(
            <View style={{backgroundColor:'red',flex:1}}>

            </View>
        );
    }
}
 class ManHinhVang extends Component{
    render(){
        return(
            <View style={{backgroundColor:'yellow',flex:1}}>

            </View>
        );
    }
}
let ao = StyleSheet.create({
    bao:{
        flex:1
    }
});

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Chat', { user: 'Quoc Tho' })}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}
class ChatScreen extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.user}`,
    });
    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        );
    }
}
const HelloApp = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
});


//Buoc 3: dang ky (register) COMPONENT chinh
AppRegistry.registerComponent('HelloApp', () => HelloApp);
/*=======NOTE============
-mỗi màng hình là 1 component
- <View> chinh la the <div> de dinh danh ra cac khu vuc trong project
- <Text> chinh la the <p>
=======================*/