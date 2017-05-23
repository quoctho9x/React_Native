import React,{Component} from  'react';
import {
    View,
    Text,
    TouchableOpacity,
} from  'react-native';
import Home from './Shop/Home/Home'

export default class Main extends Component{

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={{flex:1,backgroundColor:'white',}}>
                <Text>Home Page Shop page</Text>
                <Home/>
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