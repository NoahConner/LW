import React, { useState, useRef,useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity  } from 'react-native';
import { Icon ,CheckBox } from 'react-native-elements';
import PaymentIcon from '../assets/svg/paymentIcon.svg';
import History from '../assets/svg/historyIcon.svg';
import VisaIcon from '../assets/svg/visa.svg'
import MasterIcon from '../assets/svg/master.svg'
import RBSheet from "react-native-raw-bottom-sheet";
import AddCardSheet from '../components/add-card-sheet'
import StackHeader from '../components/stackheader'
import Coupon from '../assets/svg/coupon.svg'
import { ScrollView } from 'react-native-gesture-handler';
import DepositImg from '../assets/svg/deposite.svg'
import SCheader from '../components/screensheader'
import AppContext from '../components/appcontext'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const defaultCad = [
    {
        'card_name': 'Visa',
        'card_no': '**** 2563',
        'id': '1'
    },
    {
        'card_name': 'Master Card',
        'card_no': '**** 8569',
        'id': '2'
    },
    {
        'card_name': 'American Express',
        'card_no': '**** 8569',
        'id': '4'
    }
]

var donationHistory = [
    {
        'status':'donated',
        'restaurant':'KFC',
        'date':'11/11/2021',
        'amount':'-$1.300',
        'id':'1'
    },
    {
        'status':'donated',
        'restaurant':'KFC',
        'date':'11/11/2021',
        'amount':'-$1.300',
        'id':'2'
    },
    {
        'status':'donated',
        'restaurant':'KFC',
        'date':'11/11/2021',
        'amount':'-$1.300',
        'id':'3'
    },
]

const Wallet = ({navigation}) => {
    const myContext = useContext(AppContext);
    const refRBSheet = useRef();
    const cardDiv = (d, i) => {
        return (
            <View style={{ ...styles.Ccard,marginTop:i == 0 ? 40 : 25 }} key={i}>
                <View style={{...styles.flexRow,justifyContent:'space-between',width:'100%'}} key={i}>
                    <View style={{flexDirection:'row',width:'100%'}}>
                    {
                        d.card_name == 'Visa' ? <VisaIcon style={{ height: 30, width: 32,marginRight:25 }} /> :
                            d.card_name == 'Master Card' ? <MasterIcon style={{ height: 30, width: 32,marginRight:25 }} /> :
                            <PaymentIcon style={{ height: 30, width: 32 ,marginRight:25}}/>
                    }
                        <View style={{flexDirection:'column',width:'83%'}}>
                            <View style={{...styles.flexRow,justifyContent:'space-between'}}>
                                <Text style={{fontWeight:'bold',fontSize:RFPercentage(2.3),marginRight:0}}>Deposited</Text>
                                <Text style={{...styles.dater}}>11/11/2021</Text>
                                <Text style={{fontWeight:'bold',fontSize:RFPercentage(2.5)}}>-$1.300</Text>
                            </View>
                            <View style={{...styles.flexRow,justifyContent:'space-between'}}>
                                <Text style={styles.dater}>*** 1234</Text>
                                <Text style={styles.dater}>Service Charge:</Text>
                                <Text style={{...styles.dater,marginTop:2}}>-$1.00</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    const dCards = (d,i)=>{
        return(
            <View style={{...styles.flexRow,justifyContent:'space-between',marginTop:i == 0 ? 50 : 45}} key={i}>
                <View style={{flexDirection:'row',width:'100%'}}>
                    <Coupon style={{marginRight:15,width:'17%'}} />
                    <View style={{flexDirection:'column',width:'83%'}}>
                        <View style={{...styles.flexRow,justifyContent:'space-between'}}>
                            <Text style={{fontWeight:'bold',fontSize:RFPercentage(2.3),marginRight:0}}>Donated</Text>
                            <Text style={{...styles.dater}}>11/11/2021</Text>
                            <Text style={{fontWeight:'bold',fontSize:RFPercentage(2.5)}}>-$1.300</Text>
                        </View>
                        <Text style={styles.dater}>KFC</Text>
                    </View>
                </View>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <SCheader navigation={navigation} backbutton={true} name={'Wallet'} wallet={false}  />
            <View style={{backgroundColor:'#1E3865',width:'100%',height:200}}></View>
            <View style={{width:'100%',paddingHorizontal:20,position:'absolute',top:80}}>
                <View style={styles.depoCard}>
                    <View style={{flexDirection:'row',alignItems: 'center',width:'100%',justifyContent: 'space-between'}}>
                        <View>
                            <Text style={{fontSize:RFPercentage(2.3),color:'#000',fontFamily:'Gilroy-Medium'}}>Available Credit</Text>
                        </View>
                        <TouchableOpacity onPress={()=> navigation.navigate('DepositeAmount')}>
                            <View style={{...styles.flexRow}}>
                                <DepositImg style={{height:33,width:32}} />
                                <Text style={{fontSize:RFPercentage(2.3),color:'#FF3C40',marginLeft:10,fontFamily:'Gilroy-Medium'}}>Deposit</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{fontSize:RFPercentage(3),color:'#000',fontFamily:'Gilroy-Bold',marginTop:5}}>${myContext.WalletAmount}</Text>
                    </View>
                </View>
            </View>
            <ScrollView style={{backgroundColor:'#fff',height:'100%',borderTopLeftRadius:20,borderTopRightRadius:20,marginTop:-30,paddingHorizontal:20}}>
            <View style={{paddingTop:60,paddingBottom:30}}>
                <View style={{...styles.flexRow,marginTop:20}}>
                    <PaymentIcon style={{ height: 22, width: 32 }}/>
                    <Text style={{fontFamily:'Gilroy-Bold',fontSize:RFPercentage(2.5),marginLeft:20}}>Deposit History</Text>
                </View>
                <View style={{ marginTop: 0, width: '100%', paddingBottom:40 }}>
                    <SafeAreaView >
                        {
                            defaultCad.map((item,i)=>{
                                return(
                                    cardDiv(item,i)
                                )
                            })
                        }
                    </SafeAreaView>
                </View>
                <View>
                    <View style={{...styles.flexRow,marginTop:20}}>
                        <History style={{ height: 26, width: 32 }}/>
                        <Text style={{fontFamily:'Gilroy-Bold',fontSize:RFPercentage(2.5),marginLeft:20}}>Donation History</Text>
                    </View>
                    <View>
                        {
                            donationHistory.map((items,i)=>{
                                return(
                                    dCards(items,i)
                                )
                            })
                        }
                    </View>
                </View>
                
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    customStyles={{
                        wrapper: {
                            backgroundColor: "#0000009e",
                        },
                        draggableIcon: {
                            backgroundColor: "#E6E6E6"
                        },
                        container:{
                            backgroundColor: "#fff",
                            borderTopEndRadius:20,
                            borderTopStartRadius:20
                        }
                    }}
                    height={550}
                >
                    <AddCardSheet statement={'deposite'} />
                </RBSheet>
            </View>
            </ScrollView>

            

        </View>
    )
}
export default Wallet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: '#fff'
    },
    flexRow: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    Ccard: {
        // backgroundColor: '#F6F8FA',
        // borderRadius: 12,
        // paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    },
    dater:{
        fontSize:RFPercentage(2.2),color:'#666666'
    },
    depoCard:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 5,
        // height:100,
        width:'100%',
        backgroundColor:'#fff',
        paddingHorizontal:20,
        paddingVertical:30,
        borderRadius:15
    }
})