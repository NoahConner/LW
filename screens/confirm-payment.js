import React, { useState, useRef,useContext } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity,Dimensions,ImageBackground  } from 'react-native';
import { Image, Button, Icon,Input ,CheckBox } from 'react-native-elements';
import StackHeader from '../components/stackheader'
import PaymentIcon from '../assets/svg/paymentIcon.svg';
import VisaIcon from '../assets/svg/visa.svg'
import MasterIcon from '../assets/svg/master.svg'
import Trash from '../assets/svg/bin.svg'
import RBSheet from "react-native-raw-bottom-sheet";
import AddCardSheet from '../components/add-card-sheet'
import ReviewPayment from '../components/review-pay';
import Modals from '../components/modals';
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
const ConfirmPayment = ({navigation,route })=>{
    
    const { amount } = route.params;
    const refRBSheet = useRef();
    const refRBSheetReview = useRef();
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
                        <Text style={{ fontSize: RFPercentage(2.3), fontFamily: 'Gilroy-Bold'}}>{d.card_name}</Text>
                        <Text style={{ color: '#666666', fontSize: RFPercentage(2), marginTop: 5,fontFamily: 'Gilroy-Medium'}}>{d.card_no}</Text>
                    </View>
                </View>
                {/* <View>
                    <CheckBox
                        title=''
                        checked={cardSelect == d.card_name ? true : false}
                        onPress={()=> SetcardSelect(d.card_name)}
                        iconType='font-awesome'
                        checkedColor='#1E3865'
                        uncheckedColor='#E6E6E6'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        containerStyle={{padding:0,marginRight:0}}
                    />
                </View> */}
                <View style={{ position: 'relative', marginTop: 10 }}>
                    <Icon
                        name='square'
                        type='font-awesome'
                        color={cardSelect == d.card_name ? '#1E3865' : '#E6E6E6'}
                        iconStyle={{ fontSize: 28 }}
                        onPress={()=> SetcardSelect(d.card_name)}
                    />
                    <CheckBox
                        title=''
                        iconType='font-awesome'
                        uncheckedIcon='square'
                        checkedColor="black"
                        uncheckedColor="transparent"
                        checked={cardSelect == d.card_name ? true : false}
                        containerStyle={{ position: 'absolute', right: 30, bottom: -7, padding: 0, width: 0, overflow: 'hidden', borderRadius: 50 }}
                    />
                </View>
            </View>
        )
    }

    return(
        <View style={{...styles.container}}>
            <StackHeader navigation={navigation} name={'Confirm Payment Method'} />
            <View style={{padding:20,width:'100%',height:Dimensions.get('window').height-100}}>
                <View style={{...styles.flexRow,justifyContent: 'space-between'}}>
                    <Text style={{color:'#666666',fontSize:RFPercentage(2.5), fontFamily:'Gilroy-Medium'}}>Deposit Amont</Text>
                    <Text style={{color:'#000',fontSize:RFPercentage(2.5),fontFamily:'Gilroy-Bold'}}>${amount}</Text>
                </View>
                <View style={{...styles.flexRow,marginTop:50}}>
                    <PaymentIcon style={{ height: 28, width: 38 }}/>
                    <Text style={{fontFamily:'Gilroy-Bold',fontSize:RFPercentage(2.7),marginLeft:20}}>Payment Methods</Text>
                </View>

                <View style={{ marginTop: 0, width: '100%', paddingBottom: 80 }}>
                <SafeAreaView >
                    <FlatList
                        data={cards}
                        renderItem={({ item, index }) => (
                            cardDiv(item, index)
                        )}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        ListFooterComponent={
                            <TouchableOpacity style={{ ...styles.flexRow, marginTop: 20, marginBottom: 20, width: '70%' }} onPress={() => refRBSheet.current.open()}>
                                <Icon
                                    name='plus'
                                    type='font-awesome'
                                    color='#FF3C40'
                                    iconStyle={{ fontSize: RFPercentage(2.7) }}
                                    style={{ marginRight: 24 }}
                                />
                                <Text style={{ fontFamily:'Gilroy-Bold', fontSize: RFPercentage(2.5) }}>Add Payment Method</Text>
                            </TouchableOpacity>
                        }
                    />

                </SafeAreaView>
                
            </View>
            <View style={{position: 'absolute',bottom:15,width:'100%',left:20}}>
                <Button
                    title="Review"
                    buttonStyle={styles.NextBtns}
                    titleStyle={{fontSize:RFPercentage(2.5),fontFamily:'Gilroy-Bold'}}
                    onPress={() => refRBSheetReview.current.open()}
                />
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
                height={Dimensions.get('window').height}
            >
                <AddCardSheet statement={'deposite'} />
            </RBSheet>

            {/* review */}
            <RBSheet
                ref={refRBSheetReview}
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
                height={530}
            >
                <ReviewPayment navigation={navigation} amount={amount}  statement={'deposite'} />
            </RBSheet>

            </View>

                <Modals navigation={navigation} />
            
        </View>
    )
}
export default ConfirmPayment;

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
    NextBtns:{
        backgroundColor:'#1E3865',
        paddingHorizontal:26,
        paddingVertical:18
        ,borderRadius:15
    },
    image: {
        flex: 1,
        justifyContent: "center"
    }
})