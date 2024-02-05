
import { NavigationContainer } from '@react-navigation/native';
import { Provider} from 'react-redux';
import store from './redux/Store';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="TabNav" component={BottomTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


