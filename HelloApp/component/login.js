import React,{Component} from 'react';
import {
    TextInput,
    View,
    Text,
    Button,
    TouchableOpacity,
} from 'react-native';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            HOTEN:'',
            USERNAME:'',
            PASSWORD:'',
            token:'...',
            kq:'chua login',
        }
    }

    LOGIN(){
        fetch("http://172.16.0.189:8888/WebService/taoToken2.php",{
            "method":"POST",
            header:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                "USERNAME":this.state.USERNAME,
                "PASSWORD":this.state.PASSWORD

            })

        })
            .then((response)=>response.json())
            .then((responseJson)=>{
                this.setState({
                    token:responseJson.token,
                    kq:"dang nhap thanh cong"
                })
                console.log(responseJson);
            })
            .catch((e)=>{
                this.setState({
                token:"...",
                kq:"khong dang nhap duoc"
                });
                 console.log(e);

        })

    }
    render(){
        return(
        <View>
            <Text style={{alignItems:'center',textAlign:'center',color:'red',fontSize:30}}>Page Login</Text>

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
                <Button onPress ={()=>  this.LOGIN()} title="Dang Nhap" />
            <View>
                <Text>{this.state.kq}</Text>
            </View>
            <View>
                <Text>{this.state.token}</Text>
            </View>
        </View>
        )
    }

}