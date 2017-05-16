import {StyleSheet,Platform} from 'react-native'
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#333',

    },
    header:{
        flex:1,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
    },
    contain:{
        flex:3,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue',

    },
    footer:{
        flex:1,
        backgroundColor:'#333',
        justifyContent:'center',
        alignItems:'center',
    },
    wrap_btn:{
        flex:2,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue',

    },

    text_header:{
        fontSize:25,
        color:Platform.select({ios:'red',android:'black'}),

    },
    text_contain:{
        fontSize:100,
        color:'red',
    },
    text_button:{
        fontSize:25,
        color:'white',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
        textAlign:'center',
        width:100,
        padding:1,
    },
    text_footer:{
        fontSize:25,
        color:'white',
    },
});

export default styles;