// Buoc 1:import thu vien
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    AsyncStorage,
    TouchableOpacity,
} from 'react-native';

export default class AsyncStorageDemo extends Component{
    save = async()=>{
        try{
            await AsyncStorage.setItem("@AAA:key", "day la gia tri duoc luu");
            console.log('save ....');
        }catch(e) {
            console.log(e);
        }

    }

    get = async()=>{
        try{
            let v = await AsyncStorage.getItem("@AAA:key");
            console.log(v);
        }catch(e) {
            console.log(e);
        }
    }
    render(){
        return(
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.button} onPress={()=>{this.save()}}>
                <Text style={styles.text}>SAVE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{this.get()}}>
                <Text style={styles.text}>GET</Text>
            </TouchableOpacity>
        </View>
        );
    }

}
let styles = StyleSheet.create({
    wrapper:{flex:1,backgroundColor:'black',alignItems:'center',justifyContent:'center',},
    text:{color:'yellow'},
    button:{borderWidth:1,borderColor:'yellow',width:200,padding:30,marginBottom:20,alignItems:'center',justifyContent:'center',},
});