import React,{Component} from  'react';
import {
    View,
    Text,
    TouchableOpacity,
} from  'react-native';

export default class Home extends Component{

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center',}}>
                <Text>Home Page</Text>
                <TouchableOpacity style={{backgroundColor:'green'}}
                                  onPress={()=>{navigate('ManHinh_Detail',{thamso:'day la tham so'})}}
                >
                    <Text style={{color:"#fff",fontSize:20,padding:10}}>Go to Detail</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:'green'}}
                                  onPress={()=>{navigate('DrawerOpen')}}
                >
                    <Text style={{color:"red",fontSize:20,padding:10}}>Go to Menu</Text>
                </TouchableOpacity>
            </View>
        )
    }
}