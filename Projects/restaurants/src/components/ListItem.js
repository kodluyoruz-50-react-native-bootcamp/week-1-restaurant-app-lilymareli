import React from 'react'
import { SafeAreaView, StyleSheet, View, Text, Dimensions, Image } from 'react-native'

const ListItem = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={styles.container1, { flex: 1 }}>
                    <Image source={{ uri: props.myData.image, }} style={styles.bigImage} />
                </View>

                
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#ffddc1', flexDirection: 'row' }}>
                    <View style={{ justifyContent: 'center', flexDirection: 'row', justifyContent:'flex-start', margin: 5 }}>
                        <View>
                        <Text style={styles.textName}>{props.myData.name}</Text>
                        <Text style={styles.textLocation}>{props.myData.location}</Text>
                        </View>
                        {props.myData.isPopular && <Image style={styles.imageBurn} source={require('../assets/burn.png')} />}
                    </View>

                    <View style={styles.containerMini}>
                        <Text style={styles.textLikes}>{props.myData.likes}</Text>
                        <Image style={styles.imageLike} source={require('../assets/like.png')} />
                    </View>
                </View>
                <View style={{ width: Dimensions.get("window").width, height: 30, backgroundColor: "white" }} />



            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container1: {
        margin: 5,
        padding: 10,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container2: {
        backgroundColor: "#ff8a65",
        margin: 5,
        padding: 10,
        borderRadius: 10,
        alignItems: 'flex-end',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    container3: {
        position: 'relative',
        textAlign: 'center',
        backgroundColor: "#ff8a65",
    },
    containerMini: {
        backgroundColor: '#c97b63',
        width: 50,
        height: 50,
        borderRadius: 30,
        padding: 5,
        alignContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    textName: {
        fontSize: 20,
        marginLeft: 10,
    },
    textLikes: {
        fontSize: 20,
        shadowOpacity: 50,
        textShadowColor: 'gray',
        textShadowRadius: 10,


    },
    textLocation: {
        fontSize: 15,
        color: 'gray',
        marginLeft: 10,

    },
    imageLike: {
        width: 30,
        height: 30,
    },
    imageBurn: {
        width: 30,
        height: 30,
        margin: 5,
        position: 'relative',
        bottom: 10,
    },
    bigImage: {
        height: Dimensions.get("window").height / 3,
        resizeMode: 'cover',
        padding: 5,
        margin: 5,
    }
})

export { ListItem };