import React,{useRef} from 'react';
import { View, Text, StyleSheet, Button,FlatList,SafeAreaView,TouchableOpacity,ScrollView } from 'react-native';
import StackHeader from '../components/stackheader'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import VisaIcon from '../assets/svg/visa.svg'
import MasterIcon from '../assets/svg/master.svg'
import PaymentIcon from '../assets/svg/paymentIcon.svg';

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
    },
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
    },
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

const DepositHistory = ({navigation}) => {
    const cardDiv = (d, i) => {
        return (
            <View style={{ marginTop:30 }} key={i}>
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
                            {/* <Text style={styles.dater}>*** 1234</Text> */}
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

    return(
        <View style={styles.container}>
            <StackHeader navigation={navigation} name={'Deposit History'} />
            <ScrollView>
            <View style={{ marginTop: 0, width: '100%', paddingBottom:40,paddingHorizontal:20 }}>
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
            </ScrollView>
        </View>
    )
}
export default DepositHistory;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'flex-start',
        backgroundColor:'#fff'
    },
    flexRow:{
        flexDirection:'row',alignItems: 'center'
    },
    dater:{
        fontSize:RFPercentage(2),color:'#666666'
    },
    redColor:{
        color:'#000'
    }
})