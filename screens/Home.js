import React from 'react'
import { FlatList, View } from 'react-native'
import ProfilCard from '../components/ProfilCard'
import { DATA } from '../data/usersData'

export default function Home() {
    
    return (
        <View style={{ }}>
            <FlatList style={''} data={DATA}
                renderItem={({ item }) => <ProfilCard user={item} />}
                keyExtractor={item => item.id} />
        </View>
    )
}
