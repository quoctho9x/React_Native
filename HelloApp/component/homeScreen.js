import React,{Component} from 'react';
import {
    RefreshControl,
    Image,
    View,
    Text,
    Button,
    TouchableOpacity,
    ListView,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            trang:0,
            refreshing:false,
            dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
        }
    }
    static navigationOptions = {
        title: 'Welcome quoc tho',
    };
    loadNewData(){
        this.setState({
            refreshing:true
        });

        fetch("http://172.16.0.189:8888/WebService/vd1.php?trang="+this.state.trang)
            .then((response)=> response.json())
            .then((responseJson)=>{
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(responseJson),
                    refreshing:false,
                    trang:this.state.trang + 1
                })
            })
            .catch((error)=>{console.log(error)});

    }
    render(){
        const {navigate} = this.props.navigation;
        return(
        <View>
            <Text>Hello! demo Navigation</Text>
            <Button onPress ={()=>  navigate('Chat',{user:'quoc tho'})}  title="Chat with Lucy" />
            <ListView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.loadNewData.bind(this)}
                    />
                }
                dataSource={this.state.dataSource}
                renderRow={(row)=>
                    <View style={{padding:20,borderWidth:1,margin:5}}>
                        <Image
                            style={{width: 50, height: 50}}
                            source={{uri: row.Hinh}}
                        />
                        <Text> {row.Id} </Text>
                    </View>
                }
            />
        </View>
        )
    }
    componentDidMount(){
        //load data  172.16.0.189
        let mang = ['tho1','tho2','tho3'];
        fetch("http://172.16.0.189:8888/WebService/vd1.php?trang="+this.state.trang)
        .then((response)=> response.json())
        .then((responseJson)=>{
            this.setState({
            dataSource:this.state.dataSource.cloneWithRows(responseJson),
            })
        })
        .catch((error)=>{console.log(error)});

    }
}