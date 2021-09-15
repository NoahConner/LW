import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { Image, Button, Icon } from 'react-native-elements';
import StackHeader from '../components/stackheader'
import VisaIcon from '../assets/svg/visa.svg'
import MasterIcon from '../assets/svg/master.svg'
import Trash from '../assets/svg/bin.svg'
import RBSheet from "react-native-raw-bottom-sheet";
import AddCardSheet from '../components/add-card-sheet'
import PaymentIcon from '../assets/svg/paymentIcon.svg';
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
    },
    {
        'card_name': 'Visa',
        'card_no': '**** 2563',
        'id': '5'
    },
    {
        'card_name': 'Master Card',
        'card_no': '**** 8569',
        'id': '6'
    },
    {
        'card_name': 'American Express',
        'card_no': '**** 8569',
        'id': '7'
    },
    {
        'card_name': 'Master Card',
        'card_no': '**** 8569',
        'id': '8'
    },
    {
        'card_name': 'American Express',
        'card_no': '**** 8569',
        'id': '9'
    }
]
const PaymentMethod = ({ navigation }) => {

    const refRBSheet = useRef();
    var [cards, setCards] = useState(defaultCad)

    const removeCard = (i) => {
        var fake = cards.filter(item => item.id != i)
        setCards(fake)
    }

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
                        <Text style={{ fontSize: RFPercentage(2.7), fontWeight: 'bold' }}>{d.card_name}</Text>
                        <Text style={{ color: '#666666', fontSize: RFPercentage(2), marginTop: 5 }}>{d.card_no}</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity>
                        <Trash style={{ height: 30, width: 28 }} onPress={() => removeCard(d.id)} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <StackHeader navigation={navigation} name={'Payment Method'} />
            <View style={{ marginTop: 0, paddingHorizontal: 20, width: '100%', paddingBottom: 80 }}>
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
                                    iconStyle={{ fontSize: RFPercentage(2.5) }}
                                    style={{ marginRight: 24 }}
                                />
                                <Text style={{ fontWeight: 'bold', fontSize: RFPercentage(2.5) }}>Add Payment Method</Text>
                            </TouchableOpacity>
                        }
                    />

                </SafeAreaView>
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
                height={490}
            >
                <AddCardSheet statement={'payment-method'} />
            </RBSheet>
        </View>
    )
}

export default PaymentMethod

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: '#fff'
    },
    flexRow: {
        flexDirection: 'row', alignItems: 'center'
    },
    Ccard: {
        backgroundColor: '#F6F8FA',
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    }
})