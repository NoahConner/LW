import React, { useState, useRef,useContext } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity,Dimensions,ImageBackground  } from 'react-native';
import { Image, Button, Icon,Input ,CheckBox } from 'react-native-elements';
import Modal from "react-native-modal";
import Tick from '../assets/svg/tick.svg'
import AppContext from '../components/appcontext'

const Modals = ({navigation}) => {
    const myContext = useContext(AppContext);
    console.log(myContext)
    return(
        <View > 
                <Modal isVisible={myContext.CongratesModalCon}
                    onBackdropPress={()=>myContext.setCongratesModal(false)}
                    avoidKeyboard={true}
                >
                    <View style={{backgroundColor:'#fff',height:280,borderRadius:20 }}>
                        {/* <Text>I am the modal content!</Text> */}
                        <ImageBackground source={require('../assets/svg/modal-back.png')} resizeMode="cover" style={styles.image}>
                            <View style={{paddingHorizontal:50,alignItems: 'center'}}> 
                            <Tick style={{height:55,width:55,marginBottom:20}} />
                                <Text style={{color:'#FF3C40',fontSize:23,fontWeight:'bold'}}>Deposit Successfull! </Text>
                                <Text style={{textAlign:'center',color:'#666666',fontSize:16,marginTop:5}}>You have Successfully Deposited  the Amount.</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </Modal>
            </View>
    )
}
export default Modals;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
    }
})