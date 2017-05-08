// Buoc 1:import thu vien
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

//Buoc 2: viec code Class (component):RENDER => khác hàng muốn thấy gì thì render ra cái đó
export default class Calculator extends Component {
    //constructor day la ham khoi tao, duoc chay ngay sao khi HelloApp duoc tao ra.
    // khai bao nguon du lieu do ve
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={css.wrap}>
                <View style={css.row}>
                    <View style={css.col}>
                        <Text style={css.number} >1</Text>
                        <Text style={css.text}>ABC</Text>
                    </View>
                    <View style={css.col}>
                        <Text style={css.number} >1</Text>
                        <Text style={css.text}>ABC</Text>
                    </View>
                    <View style={css.col}>
                        <Text style={css.number} >1</Text>
                        <Text style={css.text}>ABC</Text>
                    </View>
                </View>
                <View style={css.row}>
                    <View style={css.col}>
                        <Text style={css.number} >1</Text>
                        <Text style={css.text}>ABC</Text>
                    </View>
                    <View style={css.col}>
                        <Text style={css.number} >1</Text>
                        <Text style={css.text}>ABC</Text>
                    </View>
                    <View style={css.col}>
                        <Text style={css.number} >1</Text>
                        <Text style={css.text}>ABC</Text>
                    </View>
                </View>
                <View style={css.row}>
                    <View style={css.col}>
                        <Text style={css.number} >1</Text>
                        <Text style={css.text}>ABC</Text>
                    </View>
                    <View style={css.col}>
                        <Text style={css.number} >1</Text>
                        <Text style={css.text}>ABC</Text>
                    </View>
                    <View style={css.col}>
                        <Text style={css.number} >1</Text>
                        <Text style={css.text}>ABC</Text>
                    </View>
                </View>
                <View style={css.row}>
                    <View style={css.col}>
                        <Text style={css.number} >1</Text>
                        <Text style={css.text}>ABC</Text>
                    </View>
                    <View style={css.col}>
                        <Text style={css.number} >1</Text>
                        <Text style={css.text}>ABC</Text>
                    </View>
                    <View style={css.col}>
                        <Text style={css.number} >1</Text>
                        <Text style={css.text}>ABC</Text>
                    </View>
                </View>


            </View>
        );
    }
}

let css = StyleSheet.create({
    wrap: {
        flex: 1
    },
    row: {
        flex: 1,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        flexDirection:'row'
    },
    col: {
        flex: 1,
        borderColor: 'grey',
        borderWidth: 1,
        borderBottomWidth: 0,
        justifyContent:'center',
        alignItems:'center'
    },
    number:{
        fontSize:40
    },
    text:{}


});
