import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home  from '../screens/Home';
import  Faq  from '../screens/Faq';
import { ModalComponent } from '../components/ModalComponent';
import { Ionicons } from '@expo/vector-icons';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const [isVisible, setIsVisible] = useState(false);
  const closeModal = () => {
    setIsVisible(false);
  };
  const openModal = () => {
    setIsVisible(true);
  }

  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ff6666",
          },
          headerTintColor: "white",
          headerBackTitle: "Back",
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={openModal}
            >
              <Ionicons name={'settings'} size={26} color={'white'} />
            </TouchableOpacity>
          ),
        }}
      >
        <Drawer.Screen
          options={() => ({
            drawerIcon: ({ focused, size }) => {
              const iconColor = focused ? '#0275d8' : 'gray';
              return <Ionicons name={'people-circle'} size={size} color={iconColor} />;
            },
          })}
          name="Accueil"
          component={Home}
        />
        <Drawer.Screen
          options={() => ({
            drawerIcon: ({ focused, size }) => {
              const iconColor = focused ? '#0275d8' : 'gray';
              return <Ionicons name={'chatbubbles'} size={size} color={iconColor} />;
            },
          })}
          name="FAQ"
          component={Faq}
        />


      </Drawer.Navigator>
      <ModalComponent isVisible={isVisible} onClose={closeModal} />
    </>
  );
}
export default DrawerNavigator;