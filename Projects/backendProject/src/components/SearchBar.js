import React from 'react'
import {SafeAreaView, View, Text, TextInput} from 'react-native'
import styles from '../styles'
const SearchBar = (props) => {
    return (
        <View style={styles.searchBar.container}>

<TextInput 
placeholder="Search"
onChangeText={props.onSearch}
/>
        </View>
    )
}

export {SearchBar}