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
            <View style={{flex:1, backgroundColor:'yellow',alignItems:'center',justifyContent:'center',}}>
                <Text>this is Home page</Text>

                <TouchableOpacity style={{backgroundColor:'green'}}
                                  onPress={()=>{navigate('ManHinh_ProductDetail',{thamso:'day la tham so'})}}
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