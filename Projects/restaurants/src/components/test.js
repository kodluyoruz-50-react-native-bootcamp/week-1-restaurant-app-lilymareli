import React from 'react'
import {SafeAreaView,StyleSheet,View,Text,Dimensions,Image} from 'react-native'

const ListItem =(props)=>{
return(
    <SafeAreaView style={styles.container}>
        <View style={styles.listContainer}>
            <View>
                <Image style={styles.imgContainer} resizeMode='stretch'source={{uri:props.myData.restImage}}/>
            </View>

            <View style={styles.infoContainer}>

                <View style={styles.infoLeftContainer}> 
                    <View>
                        <Text style={styles.title}>{props.myData.restName}</Text>
                        <Text style={styles.lightTitle}>{props.myData.restLocation}</Text>
                    </View>
                    <View>
                        {props.myData.restIsPopular &&<Image resizeMode='stretch' style={styles.burn} source={require('../assets/burn.png')}/>}          
                    </View>           
                </View>

                <View style={styles.infoRightContainer}>
                    <Image  resizeMode='stretch' style={styles.like} source={require('../assets/like.png')}/>  
                    <Text style={styles.likeCount}>{props.myData.restLikes}</Text>                            
                </View>

            </View>
        </View>
    </SafeAreaView>
)
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        
    },
    listContainer:{
        flex:1,
        height:Dimensions.get('window').height*0.3,
        margin:7,   
        borderRadius:10,
              
    },
    imgContainer:{
        height:Dimensions.get('window').height*0.24,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,

    },
    infoContainer:{
        height:Dimensions.get('window').height*0.06,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:'#efebe9',
        flexDirection:'row', 
        justifyContent:'space-between'
        
    },
    infoLeftContainer:{
        height:Dimensions.get('window').height*0.06,
        borderBottomLeftRadius:10,
        flexDirection:'row',
        alignItems:'center',
        width:Dimensions.get('window').width*0.4,
    },
    infoRightContainer:{
        height:Dimensions.get('window').height*0.06,
        borderBottomRightRadius:10,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        width:Dimensions.get('window').width*0.15,
    },
    title:{
        fontSize:15,
        fontWeight:'bold',
        marginLeft:3,

    },
    lightTitle:{
        fontSize:12,
        fontWeight:'400',
        marginLeft:3,
    },
    burn:{
        height:Dimensions.get('window').height*0.028,
        alignSelf:'center',
        marginLeft:10,
        width:Dimensions.get('window').width*0.05,
    },
    likeCount:{
        fontSize:12,
        fontWeight:'bold'

    },
    like:{     
        height:Dimensions.get('window').height*0.022,
        alignSelf:'center',
        width:Dimensions.get('window').width*0.048,
    }
})

export {ListItem};