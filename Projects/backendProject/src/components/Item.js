import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../styles'

const Item = props => {
    return (
        <View style={styles.item.container}> 
            <Image
                style={styles.item.image}
                source={{uri: props.data.image}}
            />
            <Text style={styles.item.songName}>{props.data.title}</Text>
            <Text style={styles.item.artistName}>{props.data.artist}</Text>
        </View>
    )
}

export { Item }
