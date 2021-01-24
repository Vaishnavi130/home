import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer,  } from "react-navigation";
import Home from "../screens/home";


const screens={
    
   
    Home:{
        screen:Home
    }
}

const Navigator = createStackNavigator(screens, { 
defaultNavigationOptions:{
    headerShown:false,
}});

export default createAppContainer(Navigator);

