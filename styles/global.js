import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container:{
     flex:1,
     justifyContent:'flex-start',
    
     backgroundColor:'white',
     opacity:0.9,
 
     },
     section:{
        marginTop:50,
        flexDirection:'row',
     },
     Input:{
      flexDirection:'row',
      borderColor:'black',
      width:250,
      paddingLeft:10,
     borderBottomWidth:1,
      },
      search:{
        flexDirection:'row',
        marginLeft:10,
        marginTop:20,
         width:325,
        height:45,
        borderRadius:64,
       padding:10,
       shadowOpacity:0.3,
       elevation:3,
       
  
      }

    });