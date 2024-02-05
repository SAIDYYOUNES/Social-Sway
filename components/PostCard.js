import { View, Text, ImageBackground, StyleSheet,Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const PostCard = ({ post }) => {
    const navigation = useNavigation()
    return (
        <Pressable onPress={() => navigation.navigate("Post",{post})}>
         <ImageBackground
            source={{ uri: post.url }}
            style={{
                width: '100%',
                height: 400,
                borderRadius: 20,
            }}
        >
            <View
                style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    width: '100%',
                    height: '15%',
                    marginTop: 'auto',
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '700',
                        color: 'white',
                    }}
                >
                    {post.title}
                </Text>
            </View>
        </ImageBackground>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    postContainer: {
        marginTop: 20,
    },
    postImage: {
        position: 'relative',
        width: 400,
        height: 400,

    },
    postTitle: {
        paddingLeft: 20,
        paddingBottom: 10,
        color: 'white',
        position: 'absolute',
        bottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    postDesc: {
        fontSize: 14,
        color: 'gray',
    },

});