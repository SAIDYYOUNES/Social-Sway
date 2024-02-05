import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStackNavigator from './MainStackNavigator';
import FavoriNavigator from './FavoriNavigator';
import { Ionicons } from '@expo/vector-icons';

const BottomTabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: route.name === 'Accueil' ? '#ff6666' : 'gray'
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        headerTintColor: 'black',
        headerBackTitle: 'Back',
      })}>
        <Tab.Screen name="Accueil" component={MainStackNavigator} options={{
          headerShown: false
          , tabBarIcon: ({ size }) => {
            return <Ionicons name={'home'} size={size} color={'white'} />;
          },
        }} />
        <Tab.Screen name="Favorite" options={{
          headerStyle: { backgroundColor: 'gray' }, headerTitleStyle: { color: 'black' }, headerTintColor: 'white'
          , tabBarIcon: ({ size }) => {
  
            return <Ionicons name={'thumbs-up-sharp'} size={size} color={'white'} />;
          },
        }} component={FavoriNavigator} />
      </Tab.Navigator>
    );
  };
  export default BottomTabNavigator;