import React, { useState } from 'react'
import axios from 'axios'
import { SafeAreaView, View, Text, Button, FlatList, ActivityIndicator } from 'react-native'
import { Item } from './src/components'
import styles from './src/styles'
import { SearchBar } from './src/components/SearchBar'

const App = () => {
  const [originalList, setOriginalList] = useState([])
  const [myList, setList] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    let response = await axios.get("https://rallycoding.herokuapp.com/api/music_albums")
    setList(response.data)
    setOriginalList(response.data)
    setLoading(false)
  }

  const renderSongs = ({ item }) => {
    return (
      <Item data={item} />
    )
  }

  const searchSong = (text) => {
    let filteredList = originalList.filter(function (item) {
      const itemData = item.title.toUpperCase()
      const textData = text.toUpperCase()

      return itemData.indexOf(textData) > -1
    })
    setList(filteredList)
  }

  return (
    <SafeAreaView>
      <View>
        <SearchBar onSearch={searchSong}
        />
        {
          loading ?
            <ActivityIndicator />
            :
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={myList}
              renderItem={renderSongs}
            />

        }
        <Button title="Fetch Data" onPress={fetchData} />
      </View>
    </SafeAreaView>
  )
}

export default App