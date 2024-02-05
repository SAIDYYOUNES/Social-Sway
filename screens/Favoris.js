import React from 'react'
import { PostCard } from '../components/PostCard'
import { Text, View, ScrollView, ImageBackground } from 'react-native'
import { useSelector } from 'react-redux'
export default function Favoris() {
  const favorited = useSelector(state => state.favorited)

  return (
    <ImageBackground
      source={require('../assets/back.jpg')}
      style={{ flex: 1 }}
    >
      <View>
        {favorited.length > 0 ? (
          <ScrollView>
            {favorited.map((item) => (
              item.photos.map((photo) => (
                <PostCard key={photo.id} post={photo} />
              ))
            ))}
          </ScrollView>
        ) : (
          <View style={{}}>
            <Text style={{ marginTop: 100 , textAlign:'center',fontSize:28}}>Aucune image a afficher</Text>
          </View>
        )}
      </View>
    </ImageBackground>
  )
}
