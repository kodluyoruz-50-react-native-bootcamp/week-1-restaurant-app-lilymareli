import {StyleSheet, Dimensions} from 'react-native'

const styles = {
    item: StyleSheet.create({
        container: {
            backgroundColor: '#eceff1',
            padding: 10,
            margin: 5,
            borderRadius: 10,
        },
        songName: {
            fontSize: 20,
            fontWeight: 'bold'
        },
        artistName: {
            fontSize: 15,
            color: 'gray'
        },
        image: {
            height: Dimensions.get('window').height /2,
            resizeMode: "contain"
        },
    }),
    searchBar: StyleSheet.create({
        container: {
            backgroundColor: '#fff3e0',
            margin: 5,
            padding: 10,
            borderRadius: 10,
        }
    })
}

export default styles