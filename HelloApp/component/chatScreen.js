import React,{Component} from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class ChatScreen extends React.Component {
    static navigationOptions =({navigation})=>({

        title: `Chat with ${navigation.state.params.user}`,
    }) ;
    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <Text>ChatScreen Chat with {params.user}</Text>
            </View>
        );
    }
}