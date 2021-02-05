import React from 'react'
import { View, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../../styles';

export default function Footer() {
    return (
        <View style={styles.Footer}>
            <View style={{flexDirection: "row",justifyContent: "space-between"}}> 
                <View style = {{flexDirection: "row"}}>
                    <AntDesign style={{marginHorizontal: 5}} name="hearto" size={25} color="#000"/>
                    <FontAwesome style={{marginHorizontal: 5}} name="comment-o" size={25} color="#000"/>
                    <Feather style={{marginHorizontal: 5}} name="send" size={25} color="#000"/>
                </View>
                <View>
                    <Feather style={{marginHorizontal: 5}} name="bookmark" size={25} color="#000"/>
                </View>
            </View>
        </View>
    )
}