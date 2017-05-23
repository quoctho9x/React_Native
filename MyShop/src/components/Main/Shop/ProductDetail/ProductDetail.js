import React,{Component} from  'react';
import {
    View,
    Text,
    TouchableOpacity,
} from  'react-native';

export default class ProductDetail extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center',}}>
                <Text>Detail</Text>
                <Text>{this.props.navigation.state.params.thamso}</Text>
                <TouchableOpacity style={{backgroundColor:'green'}}
                                  onPress={()=>{this.props.navigation.goBack()}}
                >

                    <Text style={{color:"#fff",fontSize:20,padding:10}}>Back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}