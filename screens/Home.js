import React from 'react'
import { FlatList, View } from 'react-native'
import ProfilCard from '../components/ProfilCard'
import { useSelector } from 'react-redux'

export default function Home() {
    const users = useSelector(state => state.users)
    const filter = useSelector(state => state.filter)
    const filtered = users.filter(user => filter.includes(user.category))

    return (
        <View style={{ }}>
            <FlatList style={''} data={filtered}
                renderItem={({ item }) => <ProfilCard user={item} />}
                keyExtractor={item => item.id} />
        </View>
    )
}
