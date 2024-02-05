import React from 'react'
import { View, Text, Image,StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { FullWindowOverlay } from 'react-native-screens'
export default function Post({ route }) {
    const { post } = route.params
    return (
        <View>
            <ScrollView style={styles.container} >
            <Image style={styles.postImage} source={{ uri: post.url }} />
            <Text style={styles.postTitle}>{post.title}</Text>
            <Text style={styles.postDesc}>{post.photoDesc}</Text>
            </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    postTitle: {
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingTop: 20,
        fontSize: 30,
    },
    postDesc: {
        fontWeight: 'semibold',
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: 26,
    },
    postImage: {
        position: 'relative',
        width: 400,
        height: 400,}
    })