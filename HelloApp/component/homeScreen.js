import React,{Component} from 'react';
import {
    TextInput,
    View,
    Text,
    Button,
    TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            HOTEN:'',
            USERNAME:'',
            PASSWORD:'',
            result:'...',
        }
    }
    static navigationOptions = {
        title: 'Welcome quoc tho',
    };
    clickPlus(){
        fetch("http://172.16.0.189:8888/WebService/dangky.php",{
            method:'POST',
            header:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'HOTEN':this.state.HOTEN,
                'USERNAME':this.state.USERNAME,
                'PASSWORD':this.state.PASSWORD,

            })
        })
        .then((response)=>response.json())
        .then((responseJson)=>{
            console.log('hello');
            this.setState({
                result:responseJson.id,
            })
        })
        .catch((error)=> {console.log(error)});
    }
    render(){
        return(
        <View>
            <Text>Hello! demo Navigation</Text>
            <Button onPress ={()=>  navigate('Chat',{user:'quoc tho'})}  title="Chat with Lucy" />
            <TextInput
                style={{height: 40, borderColor: 'red', borderWidth: 2,marginBottom:30,}}
                value={this.state.HOTEN}
                placeholder="ho ten"
                onChangeText={(HOTEN)=> this.setState({HOTEN})}
            />
            <TextInput
                style={{height: 40, borderColor: 'red', borderWidth: 2,marginBottom:30,}}
                value={this.state.USERNAME}
                placeholder="user name"
                onChangeText={(USERNAME)=> this.setState({USERNAME})}
            />
            <TextInput
                style={{height: 40, borderColor: 'red', borderWidth: 2,marginBottom:30,}}
                value={this.state.PASSWORD}
                placeholder="password"
                onChangeText={(PASSWORD)=> this.setState({PASSWORD})}
            />
                <Button onPress ={()=>  this.clickPlus()} title="Dang ky" />
            <View>
                <Text>{this.state.result}</Text>
            </View>
        </View>
        )
    }

}