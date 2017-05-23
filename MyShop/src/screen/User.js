import React,{Component} from  'react';
import {
    View,
    Text,
} from  'react-native';

export default class User extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'white',alignItems:'center',}}>
                <Text>User</Text>
            </View>
        )
    }
}