import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

const PostItem = (props) => {
    return (
        <TouchableOpacity
        onPress={props.onPostSelect}>
            <Text>{props.title}</Text>
            <Text>{props.body} </Text>
        </TouchableOpacity>
    );
}
export {PostItem}