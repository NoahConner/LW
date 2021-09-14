import React, { useState, useRef, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { Image, Button, Icon, Input, CheckBox } from 'react-native-elements';
import Modal from "react-native-modal";
import Tick from '../assets/svg/tick.svg'
import AppContext from '../components/appcontext'

const Modals = ({ navigation }) => {
    const myContext = useContext(AppContext);
    const goOnDeposit = ()=>{
        myContext.setSorryModal(false)
        navigation.navigate('DepositeAmount')
    }

    var showmodal = false;
    if (myContext.CongratesModalCon || myContext.SorryModalCon || myContext.CouponModalCon) {
        showmodal = true
        console.log(true)
    } else {
        showmodal = false
    }

    if(myContext.CongratesModalCon){
        setTimeout(function(){
            myContext.setCongratesModal(false);
            showmodal = false;
            navigation.navigate('Home')
        },6000)
    }

    const modalConditionsClose = () => {
        if (myContext.CongratesModalCon) {
            myContext.setCongratesModal(false)
            navigation.navigate('Home')
        }
        else if (myContext.SorryModalCon) {
            myContext.setSorryModal(false)
        }
        else if (myContext.CouponModalCon) {
            myContext.setCouponModal(false)
        }
        
    }

    return (
        <View >
            <Modal isVisible={showmodal}
                onBackdropPress={() => modalConditionsClose()}
                avoidKeyboard={true}
            >
                <View style={{ backgroundColor: '#fff', height: 280, borderRadius: 20 }}>
                    <ImageBackground source={require('../assets/svg/modal-back.png')} resizeMode="cover" style={styles.image}>
                        <View style={{ paddingHorizontal: myContext.CouponModalCon ? 30 : 50, alignItems: 'center' }}>
                            {myContext.CongratesModalCon ? (
                                <>
                                    <Tick style={{ height: 55, width: 55, marginBottom: 20 }} />
                                    <Text style={{ color: '#FF3C40', fontSize: 23, fontWeight: 'bold' }}>Deposit Successfull! </Text>
                                    <Text style={{ textAlign: 'center', color: '#666666', fontSize: 16, marginTop: 5 }}>You have Successfully Deposited  the Amount.</Text>
                                </>
                            ) : myContext.SorryModalCon ? (
                                <>

                                    <Text style={{ color: '#FF3C40', fontSize: 23, fontWeight: 'bold' }}>Sorry :(</Text>
                                    <Text style={{ textAlign: 'center', color: '#666666', fontSize: 16, marginTop: 5 }}>you don't have insufficient balance in your wallet, Please deposit money on you wallet</Text>
                                    <Button
                                        title="Deposit"
                                        type="solid"
                                        buttonStyle={{
                                            backgroundColor: '#1E3865',
                                            paddingHorizontal: 15,
                                            paddingVertical: 15,
                                            borderRadius: 15,
                                        }}
                                        titleStyle={{
                                            fontSize: 18
                                        }}
                                        containerStyle={{ width: '100%', marginTop: 30 }}
                                        onPress={()=> goOnDeposit()}
                                    />
                                </>
                            ) : myContext.CouponModalCon ? (
                                <>

                                    <Text style={{ color: '#FF3C40', fontSize: 23, fontWeight: 'bold' }}>Thanks For Your Donation! </Text>
                                    <Text style={{ textAlign: 'center', color: '#666666', fontSize: 16, marginTop: 5 }}>Here`s the coupon code for your Leaper`s Food.</Text>
                                    <Text style={{ textAlign: 'center', color: '#1E3865', fontSize: 18, marginTop: 25, fontWeight: 'bold' }}>Coupon Code</Text>
                                    <Button
                                        title={myContext.CurrentCoupon}
                                        type="solid"
                                        buttonStyle={{
                                            backgroundColor: '#1E3865',
                                            paddingHorizontal: 15,
                                            paddingVertical: 20,
                                            borderRadius: 15,
                                        }}
                                        titleStyle={{
                                            fontSize: 22
                                        }}
                                        containerStyle={{ width: '100%', marginTop: 15 }}
                                    />
                                </>
                            ) : null
                            }
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