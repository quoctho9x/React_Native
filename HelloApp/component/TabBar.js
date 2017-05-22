// Buoc 1:import thu vien
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class TabBar extends Component{
   constructor(props){
       super (props)
        this.state={
            selectedTab:'home'
        }
   }
    render(){
        return(
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image source={require('../images/Home-black.png')} />}
                    renderSelectedIcon={() => <Image source={require('../images/Home-green.png')} />}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <View style={{flex:1,backgroundColor:'yellow'}}></View>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'shop'}
                    title="Shop"
                    onPress={() => this.setState({ selectedTab: 'shop' })}>
                    <View style={{flex:1,backgroundColor:'red'}}></View>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'shopingcar'}
                    title="shopingcar"
                    onPress={() => this.setState({ selectedTab: 'shopingcar' })}>
                    <View style={{flex:1,backgroundColor:'pink'}}></View>
                </TabNavigator.Item>

            </TabNavigator>
        );
    }

}
