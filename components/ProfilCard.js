import React from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import { ProfilCardStyle } from '../styles'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function ProfilCard({ user }) {
    const [isPressed, setIsPressed] = useState(false);
    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };
    const navigation = useNavigation()
    return (
        <TouchableHighlight
      underlayColor="transparent"
            
            onLongPress={handlePressIn} onPressOut={handlePressOut}  onPress={() => navigation.navigate("Profil", { user })}
           
    >
            <View  style={ { backgroundColor: isPressed ? '#ff6666' : 'transparent' }}  >
                <Text style={ProfilCardStyle.userName} >{user.name}</Text>
                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: user.img }} style={ProfilCardStyle.img} />
                </View>
                <View style={ProfilCardStyle.detail}>
                    <Text style={ProfilCardStyle.detail} >{user.country}</Text>
                    <Text style={ProfilCardStyle.detail}>{user.photos.length}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}
