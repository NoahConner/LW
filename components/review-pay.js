import React, { Component,useState,useContext } from "react";
import { StyleSheet, View, Switch,Modal,Alert,Pressable } from "react-native";
import { CheckBox ,Button,Text,Icon,Image  } from 'react-native-elements'
import ReviewImg from '../assets/svg/review.svg'
import VisaIcon from '../assets/svg/visa.svg'
import MasterIcon from '../assets/svg/master.svg'
import Tick from '../assets/svg/tick.svg'
import AppContext from '../components/appcontext'

const ReviewPayment = ({navigation,amount})=>{
    const myContext = useContext(AppContext);
    const depositeAmount = ()=>{
        myContext.setWalletAmount(amount)
        myContext.setCongratesModal(true)
    }

    return(
        <View style={{padding:20}}>
            <View style={styles.flexRow}>
                <ReviewImg style={{height:60,width:60}} />
                <Text style={{fontSize:23,fontWeight: 'bold',marginTop:0,color:'#000',marginLeft:20}}>Review and Confirm</Text>
            </View>
            <Text style={{marginTop:40,fontSize:19,color:'#666666'}}>Deposit Amount</Text>
            <Text style={{marginTop:5,fontSize:28,color:'#000',fontWeight:'bold'}}>${amount}</Text>

            <Text style={{marginTop:25,fontSize:19,color:'#666666'}}>PayPal Charges</Text>
            <Text style={{marginTop:5,fontSize:28,color:'#000',fontWeight:'bold'}}>$1.25</Text>

            <View style={{alignItems: 'flex-end',justifyContent: 'space-between',flexDirection: 'row',marginBottom:40,marginTop:0}}>
                <View style={{...styles.flexRow}}>
                    <Text style={{fontSize:18}}>Pay with</Text>
                    <VisaIcon style={{ height: 20, width: 30,marginLeft:10 }} />
                    <Text style={{fontSize:16,color:'#666666',marginLeft:5}}>**** 1234</Text>
                </View>
                <View style={{alignItems: 'flex-end',}}>
                    <Text style={{fontSize:19,color:'#666666'}}>Total</Text>
                    <Text style={{marginTop:5,fontSize:28,color:'#000',fontWeight:'bold'}}>${parseInt(amount)+1.25}</Text>
                </View>
            </View>

            <View>
                <Button
                    title="Confirm"
                    buttonStyle={styles.NextBtns}
                    titleStyle={{fontSize:18}}
                    onPress={()=> depositeAmount()}
                />
                <Button
                    title="Modify"
                    buttonStyle={{...styles.NextBtns,backgroundColor:'#F6F8FA',marginTop:10}}
                    titleStyle={{fontSize:18,color:'#1E3865'}}
                    onPress={()=> navigation.goBack()}
                />
            </View>
        </View>
    )
}
export default ReviewPayment;

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    NextBtns:{
        backgroundColor:'#1E3865',
        paddingHorizontal:26,
        paddingVertical:18
        ,borderRadius:15
    },
})