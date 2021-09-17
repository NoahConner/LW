import React, { useState, useRef,useContext } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity,Dimensions,ImageBackground   } from 'react-native';
import { Image, Button, Icon,Input ,CheckBox } from 'react-native-elements';
import Wallet from '../assets/svg/wallet.svg'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AppContext from '../components/appcontext'

const SCheader = ({navigation,backbutton,name,wallet}) => {

    const appContext = useContext(AppContext)

    const bactNav = (c)=>{
        if(c == 'Map'){
            appContext.setmapModal(false)
        }else{
            navigation.goBack()
        }
    }

    return(
        <View style={{position:'absolute',zIndex:1000,width:Dimensions.get('window').width}}>
            <View style={{...styles.flexRow,width:'100%',paddingHorizontal:20,paddingVertical:10}}>
                <View style={styles.flexRow}>
                    {
                        backbutton != false ? (
                            <>
                            <TouchableOpacity onPress={() => bactNav(name)}>
                                <View style={{backgroundColor:'#fff',paddingVertical:10,paddingHorizontal:12,borderRadius:50,marginRight:15}}>
                                    <Icon
                                        name='arrow-left'
                                        type='font-awesome'
                                        color='#FF3C40'
                                        onPress={() => bactNav(name)} 
                                    />
                                </View>
                            </TouchableOpacity>
                            </>
                        ):(
                            null
                        )
                    }
                    {
                        name != null || name != '' || name != undefined ? (
                            <>
                            <Text style={{fontSize:RFPercentage(2.5),fontFamily:'Gilroy-Bold',color:'#fff'}}>{name}</Text>
                            </>
                        ):(
                            null
                        )
                    }
                </View>
                <View>
                    {
                        wallet != false ? (
                            <>
                            <TouchableOpacity onPress={()=> navigation.navigate('Wallet')}>
                                <View style={{backgroundColor:'#fff',paddingVertical:10,paddingHorizontal:8,borderRadius:50}}>
                                    <Wallet style={{height:23,width:28}} />
                                </View>
                            </TouchableOpacity>
                            </>
                        ):(
                            null
                        )
                    }
                </View>
            </View>
        </View>
    )
}
export default SCheader;

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between'
    },
})