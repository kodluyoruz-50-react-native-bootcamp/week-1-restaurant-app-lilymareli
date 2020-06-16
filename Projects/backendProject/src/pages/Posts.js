import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, View, Button, ActivityIndicator, } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import {PostItem, SearchBar} from '../components'


const Posts = props => {
    const [postList, setPostList] = useState([])
    const [loading, setLoading] =useState(true)

    useEffect(() => { 
        fetchData() 
    }, [])

    const fetchData = async () => {
        let { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setPostList(data)
        setLoading(false)
    }

        const renderPosts = ({item}) => {
            return(
            <PostItem
            title={item.title}
            body={item.body}
            onPostSelect={() => postSelect(item)}
            />
            )
        }

        function postSelect(post) {
            props.navigation.navigate("CommentsPage"), {postID: post.id}
        }
    
    return (
        <SafeAreaView>
            { loading ?
            <View>
                <ActivityIndicator size="large" />
            </View>
            :
            <FlatList
                keyExtractor={(_, index) => index.toString}
                data={postList}
                renderItem={renderPosts}
                ItemSeparatorComponent={() => <View style={{borderWidth: 0.5 }}/>}
            />
}
        </SafeAreaView>
    )
}

export {Posts}
