import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Alert } from 'react-native';
import { Profil } from '../components/Profil';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/actions';
import DrawerNavigator from './DrawerNavigator';
import Post from '../components/Post';
const Stack = createStackNavigator();
const MainStackNavigator = () => {
    const dispatch = useDispatch();
    const favorited = useSelector(state => state.favorited)
    return (
      <Stack.Navigator >
        <Stack.Screen name="Drawer" options={{ headerShown: false }} component={DrawerNavigator} />
        <Stack.Screen options={({ route }) => ({
          title: 'Portfolio de' + ' ' + route.params.user.name.toUpperCase(),
          headerTintColor: 'white',
          headerShadowVisible: false,
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => {
                dispatch(toggleFavorite(route.params.user))
                Alert.alert('Photos enregistrées', 'Elles sont disponible dans votre selection ')
              }}
            >
              <Ionicons name={!favorited.includes(route.params.user) ? 'thumbs-up' : 'trash'} size={26} color={'white'} />
            </TouchableOpacity>
          ),
          headerStyle: { backgroundColor: route.params.user.favColor }
        })} name="Profil" component={Profil} />
        <Stack.Screen options={({ route }) => ({
          title: route.params.post.title.toUpperCase(),
          headerTintColor: 'black',
          headerShadowVisible: false,
        })} name="Post" component={Post} />
  
      </Stack.Navigator>
    );
  }
  export default MainStackNavigator;