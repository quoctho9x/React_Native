import React,{Component} from  'react';
import {
    View,
    Text,
    TouchableOpacity,
} from  'react-native';

export default class Menu extends Component{
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={{flex:1,backgroundColor:'white',alignItems:'center',}}>
                <Text> Menu</Text>
                <TouchableOpacity style={{backgroundColor:'green'}}
                                  onPress={()=>{navigate('ManHinh_ChangeInfo')}}
                >
                    <Text style={{color:"#fff",fontSize:20,padding:10}}>Go to ChangeInfo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'green'}}
                                  onPress={()=>{navigate('ManHinh_Authentication')}}
                >
                    <Text style={{color:"#fff",fontSize:20,padding:10}}>Go to Authentication</Text>
                </TouchableOpacity>
            </View>
        )
    }
}