import React,{Component} from  'react';
import {
    View,
    Text,
    TouchableOpacity,
} from  'react-native';

export default class Shop extends Component{

    render(){
        return(
            <View style={{flex:1,backgroundColor:'yellow',alignItems:'center',justifyContent:'center',}}>
                <Text>this is shop page</Text>

            </View>
        )
    }
}