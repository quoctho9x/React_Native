import React, {Component} from  'react';
import {
    View,
    Text,
    StatusBar,
} from  'react-native';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import Home from './screen/Home';
import Detail from './screen/Detail';
import Menu from './screen/Menu';
import User from './screen/User';

export const HomeStack = StackNavigator({
    ManHinh_Home: {
        screen: Home,
        navigationOptions: {
            title: 'Trang chu'
        }
    },
    ManHinh_Detail: {
        screen: Detail,
        navigationOptions: {
            title: 'Back Home'
        }

    }
});

export const UserStack = StackNavigator({
    ManHinh_User: {
        screen: User,
        navigationOptions: {title: 'Tai khoan'}
    }
});

export const Tabs = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'Home'
        }
    },
    User: {
        screen: UserStack,
        navigationOptions: {
            title: 'User'
        }
    }
    }, {
        tabBarPosition:'bottom',
        tabBarOptions: {
            activeTintColor: '#e91e63',
            style:{backgroundColor:"green"}
        }

    });

export  const SideMenu =DrawerNavigator({
    Tabbar:{
        screen:Tabs
    },
},{
    drawerWidth: 300,
    drawerPosition: 'left',
    contentComponent: props => <Menu {...props} />
});

