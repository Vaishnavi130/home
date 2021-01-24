import React from "react";
import { StyleSheet,Text,View,TextInput,Button,Image } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home() {
  
return (
      
    
         <View style={globalStyles.container}>
           <View style={globalStyles.section}>
           <Image source={require('../src/images/search.jpg')} 
    style={{height:25,width:20,marginLeft:10,}}/>
     <TextInput style={globalStyles.Input}  placeholder='Location' />
          </View>

          <View style={globalStyles.search}>
          <Image source={require('../src/images/s.jpg')} 
    style={{height:25,width:25,marginLeft:5,marginRight:10}}/>
  <TextInput   placeholder='Restaurant name , cuisine , or a dishes' />
</View>

      </View>
      

    );
    
  

}
