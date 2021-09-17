import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { Button,Icon } from 'react-native-elements';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const StackHeader = ({navigation,name})=>{
    return(
        <View style={styles.header}>
           <Icon
            name='arrow-left'
            type='font-awesome'
            color='#FF3C40'
            onPress={() => navigation.goBack()} 
            />
           
            <Text style={{fontSize:RFPercentage(2.5),fontFamily:'Gilroy-Bold',marginLeft:20}}>{name}</Text>
        </View>
    )
}

export default StackHeader;

const styles = StyleSheet.create({
    header:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 1.5,
        height:80,
        width:'100%',
        marginTop:-10,
        // marginLeft:'-5%',
        paddingTop:5,
        paddingHorizontal:20,
        borderBottomEndRadius:15,
        borderBottomStartRadius:15,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    }
})