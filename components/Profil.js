import React from "react";
import { PostCard } from "./PostCard";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

export const Profil = ({ route }) => {

    const { user } = route.params;


    return (
        <ScrollView style={styles.container} >
            <View style={{ backgroundColor: user.favColor }}>
                <Image source={{ uri: user.img }} style={styles.image} />
                <Text style={styles.name}>{user.name}</Text>
            </View>
            <Text style={styles.bio}>Bio:</Text>
            <Text style={styles.desc}>{user.desc}</Text>
            <View style={{gap:20}}>

            {user.photos.map(photo => (
                <PostCard key={photo.id} post={photo} />
            ))}
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {

    },
    image: {
        borderColor: 'white',
        borderWidth: 5,
        width: 170,
        height: 170,
        borderRadius: 100,
        alignSelf: 'center',
    },
    name: {
        paddingBottom: 20,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15,
        color: 'white',

    },
    bio: {
        paddingLeft: 20,
        paddingVertical: 20,
        fontSize: 30,
        marginTop: 10,
        fontWeight: 'bold',

    },
    desc: {
        lineHeight: 28,
        fontSize: 20,
        fontWeight: 'semibold',
        paddingHorizontal: 20,
    },


});