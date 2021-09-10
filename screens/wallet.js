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
    const refRBSheet = useRef();
    const [cards, setCards] = useState(defaultCad)
    const [cardSelect,SetcardSelect] = useState(defaultCad[0].card_name);
    const cardDiv = (d, i) => {
        return (
            <View style={{ ...styles.Ccard, marginTop: i == 0 ? 20 : 15 }}>
                <View style={styles.flexRow}>
                    {
                        d.card_name == 'Visa' ? <VisaIcon style={{ height: 30, width: 40 }} /> :
                            d.card_name == 'Master Card' ? <MasterIcon style={{ height: 30, width: 40 }} /> :
                            <PaymentIcon style={{ height: 30, width: 40 }}/>
                    }
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{d.card_name}</Text>
                        <Text style={{ color: '#666666', fontSize: 16, marginTop: 5 }}>{d.card_no}</Text>
                    </View>
                </View>
                <View>
                    <CheckBox
                        title=''
                        checked={cardSelect == d.card_name ? true : false}
                        // onPress={()=> SetcardSelect(d.card_name)}
                        iconType='font-awesome'
                        checkedColor='#1E3865'
                        uncheckedColor='#E6E6E6'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        containerStyle={{padding:0,marginRight:0}}
                    />
                </View>
            </View>
        )
    }
    const dCards = (d,i)=>{
        return(
            <View style={{...styles.flexRow,justifyContent:'space-between',width:'100%',marginTop:i == 0 ? 60 : 45}} key={i}>
                <View style={styles.flexRow}>
                    <Coupon style={{marginRight:15}} />
                    <View style={{flexDirection:'column'}}>
                        <View style={styles.flexRow}>
                            <Text style={{fontWeight:'bold',fontSize:21,marginRight:20}}>Donated</Text>
                            <Text style={styles.dater}>11/11/2021</Text>
                        </View>
                        <Text style={styles.dater}>KFC</Text>
                    </View>
                </View>
                <View>
                    <Text style={{fontWeight:'bold',fontSize:21}}>-$1.300</Text>
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
                            <Text style={{fontSize:22,color:'#000'}}>Available Credit</Text>
                        </View>
                        <TouchableOpacity onPress={()=> navigation.navigate('DepositeAmount')}>
                            <View style={{...styles.flexRow}}>
                                <DepositImg style={{height:40,width:40}} />
                                <Text style={{fontSize:22,color:'#FF3C40',marginLeft:15}}>Deposit</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{fontSize:26,color:'#000',fontWeight:'bold',marginTop:5}}>$300.00</Text>
                    </View>
                </View>
            </View>
            <ScrollView style={{backgroundColor:'#fff',width:'100%',height:'100%',borderTopLeftRadius:20,borderTopRightRadius:20,marginTop:-30,paddingHorizontal:20}}>
            <View style={{paddingTop:60,paddingBottom:30}}>
                <View style={{...styles.flexRow,marginTop:20}}>
                    <PaymentIcon style={{ height: 28, width: 38 }}/>
                    <Text style={{fontWeight:'bold',fontSize:22,marginLeft:20}}>Payment Methods</Text>
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
                        <TouchableOpacity style={{ ...styles.flexRow, marginTop: 20, marginBottom: 20, width: '70%' }} onPress={() => refRBSheet.current.open()}>
                            <Icon
                                name='plus'
                                type='font-awesome'
                                color='#FF3C40'
                                iconStyle={{ fontSize: 24 }}
                                style={{ marginRight: 24 }}
                            />
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Add Payment Method</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                </View>
                <View>
                    <View style={{...styles.flexRow,marginTop:0}}>
                        <History style={{ height: 36, width: 38 }}/>
                        <Text style={{fontWeight:'bold',fontSize:22,marginLeft:20}}>Donation History</Text>
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
                    closeOnPressMask={false}
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
        fontSize:16,color:'#666666'
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