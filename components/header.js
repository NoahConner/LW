import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity  } from 'react-native';
import { Button,Icon } from 'react-native-elements';
import Wallet from '../assets/svg/wallet.svg';
import Bars from '../assets/svg/bars.svg';
import Location from '../assets/svg/location.svg';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const Header = ({navigation})=>{
    return(
        <View style={styles.header}>
            <View style={{width: '100%',flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',padding:10,textAlign:'center',
            elevation:1,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 5, 
            borderBottomEndRadius:15,
            borderBottomStartRadius:15
        }}>
                <View style={{flexDirection: 'row',alignItems: 'center',width: '90%',paddingLeft:5}} numberOfLines={1}>
                        <Button
                            icon={
                                <Bars style={{height:29,width:40}}/>
                            }
                            title=""
                            containerStyle={{width:35}}
                            buttonStyle={{backgroundColor:'transparent'}}
                            onPress={()=> navigation.openDrawer()}
                        />
                    <View style={{marginLeft:25,width:'100%',paddingRight:100}}>
                        <Text style={{fontWeight:'bold',fontSize:RFPercentage(3),marginBottom:5}}>Location Radius</Text>
                        <View style={{flexDirection: 'row',alignItems: 'center'}}>
                        <Location
                        style={{height:18,width:15,marginRight:10}}
                         />
                            <Text numberOfLines={1}>4001 Oral Lake Road, New York, NY  </Text>
                        </View>
                    </View>
                </View>
                <View style={{width: '10%',alignItems: 'flex-end',paddingRight:2}}>
                    <TouchableOpacity>
                        <Button
                            icon={
                                <Wallet style={{height:25,width:35}} />
                            }
                            title=""
                            containerStyle={{width:30}}
                            buttonStyle={{backgroundColor:'transparent'}}
                            onPress={() => navigation.navigate('Wallet')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    }
})



