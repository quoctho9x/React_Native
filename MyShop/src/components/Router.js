import React, {Component} from  'react';
import {
    View,
    Text,
    StatusBar,
} from  'react-native';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import Main from '../components/Main/Main';
import Menu from '../components/Main/Menu';
import Authentication from '../components/Authentication/Authentication';
//import ChangeInfo from '../components/ChangeInfo/ChangeInfo';
import Home from '../components/Main/Shop/Home/Home';
import ProductDetail from '../components/Main/Shop/ProductDetail/ProductDetail';
import Search from '../components/Main/Shop/Search/Search';
import Cart from '../components/Main/Shop/Cart/Cart';

export const HomeStack = StackNavigator({
    ManHinh_Home: {
        screen: Home,
        navigationOptions: {
            title: 'Trang chu'
        }
    },
    ManHinh_Search: {
        screen: Search,
        navigationOptions: {
            title: 'Search'
        }
    },
    ManHinh_Cart: {
        screen: Cart,
        navigationOptions: {
            title: 'Cart'
        }
    },
    ManHinh_ProductDetail: {
        screen: ProductDetail,
        navigationOptions: {
            title: 'ProductDetail'
        }
    },


});
export const MenuStack = StackNavigator({
    ManHinh_Menu: {
        screen: Menu,
        navigationOptions: {
            title: 'menu'
        }
    },
    ManHinh_Authentication: {
        screen: Authentication,
        navigationOptions: {
            title: 'Authentication'
        }
    },
    /*ManHinh_ChangeInfo: {
        screen: ChangeInfo,
        navigationOptions: {
            title: 'ChangeInfo'
        }
    },*/


});
export const SearchStack = StackNavigator({
    ManHinh_Search: {
        screen: Search,
        navigationOptions: {
            title: 'Search'
        }
    },

});

export const CartStack = StackNavigator({
    ManHinh_Cart: {
        screen: Cart,
        navigationOptions: {
            title: 'Cart'
        }
    },

});

export const Tabs = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'Home'
        }
    },
    Menu: {
        screen: MenuStack,
        navigationOptions: {
            tabBarLabel: 'menu'
        }
    },
    Search: {
        screen: SearchStack,
        navigationOptions: {
            title: 'Search'
        }
    },
    Cart: {
        screen: CartStack,
        navigationOptions: {
            title: 'Cart'
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

