import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Image } from "react-native";

import House from "../assets/house.svg";
import Search from "../assets/search.svg";
import Store from "../assets/store.svg";
import Union from "../assets/union.svg";
import foto from "../assets/foto.png";


const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator 
    screenOptions={{
        headerShown: false,
        tabBarStyle: {
            backgroundColor: "#000",
        },
        tabBarShowLabel: false,
    }}
    
    >
      <Tab.Screen options={{
        tabBarIcon: ({color}) => <House />,
      }}
       name="Home" 
       component={Home} />

    <Tab.Screen options={{
        tabBarIcon: ({color}) => <Search />,
      }}
       name="Home2" 
       component={Home} />

    <Tab.Screen options={{
        tabBarIcon: ({color}) => <Store />,
      }}
       name="Home3" 
       component={Home} />

    <Tab.Screen options={{
        tabBarIcon: ({color}) => <Union />,
      }}
       name="Home4" 
       component={Home} />

    <Tab.Screen options={{
        tabBarIcon: ({color}) => <Image style={{
            width: 35,
            height: 35,
        }} source={foto}/>,
      }}
       name="Home5" 
       component={Home} />

    </Tab.Navigator>
  );
}