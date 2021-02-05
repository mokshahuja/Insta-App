import React from 'react'
import { View, Text } from 'react-native'

import ProfilePicture from '../../ProfilePicture'
import styles from '../../styles'
import Entypo from 'react-native-vector-icons/Entypo'

export default function Header({uri,name}) {
    return (
        <View style = {styles.Header}>
           
           <View style = {styles.leftHeader} >
               <ProfilePicture uri={uri} size={'small'} />
               <Text  style = {styles.leftHeaderTitle} >{name}</Text>
           </View>

           <View>
                <Entypo name={'dots-three-vertical'} size={25} color={'blue'} />
           </View>
            
        </View>
    )
}
