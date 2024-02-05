import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Favoris from '../screens/Favoris';
import Post from '../components/Post';

const FavoriNavigator = () => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator >
        <Stack.Screen name="favoris" options={{ headerShown: false }} component={Favoris} />
        <Stack.Screen options={({ route }) => ({
          title: route.params.post.title.toUpperCase(),
          headerTintColor: 'black',
          headerShadowVisible: false,
        })} name="Post" component={Post} />
       
  
      </Stack.Navigator>
    );
  }
  export default FavoriNavigator;