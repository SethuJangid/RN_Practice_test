import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashBorad from '../Screens/Dashboard';
const Stack = createNativeStackNavigator();
export const PrivateRoute=()=>{
    return(
        <Stack.Navigator initialRouteName='dashboard'>
        <Stack.Screen name= "dashboard" component={DashBorad} options={{headerShown:false}}></Stack.Screen>
      </Stack.Navigator>
    )
}