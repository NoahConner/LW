import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity  } from 'react-native';
import { Button,Icon } from 'react-native-elements';
import Wallet from '../assets/svg/wallet.svg';
import Bars from '../assets/svg/bars.svg';
import Location from '../assets/svg/location.svg';

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
                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                        <Button
                            icon={
                                <Bars style={{height:25,width:32}}/>
                            }
                            title=""
                            containerStyle={{width:35}}
                            buttonStyle={{backgroundColor:'transparent'}}
                            onPress={()=> alert('00')}
                        />
                    <View style={{marginLeft:20,width:'70%'}}>
                        <Text style={{fontWeight:'bold',fontSize:20,marginBottom:5}}>Location Radius</Text>
                        <View style={{flexDirection: 'row',alignItems: 'center'}}>
                        <Location
                        style={{height:18,width:15,marginRight:10}}
                         />
                            <Text numberOfLines={1}>4001 Oral Lake Road, New York, NY</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <TouchableOpacity>
                        <Button
                            icon={
                                <Wallet style={{height:25,width:35}} />
                            }
                            title=""
                            containerStyle={{width:35}}
                            buttonStyle={{backgroundColor:'transparent'}}

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
