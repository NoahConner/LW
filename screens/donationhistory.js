import React from 'react';
import { View, Text, StyleSheet, Button,FlatList,SafeAreaView } from 'react-native';
import StackHeader from '../components/stackheader'
import Coupon from '../assets/svg/coupon.svg'


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
    {
        'status':'donated',
        'restaurant':'KFC',
        'date':'11/11/2021',
        'amount':'-$1.300',
        'id':'4'
    },
    {
        'status':'donated',
        'restaurant':'KFC',
        'date':'11/11/2021',
        'amount':'-$1.300',
        'id':'5'
    },
    {
        'status':'donated',
        'restaurant':'KFC',
        'date':'11/11/2021',
        'amount':'-$1.300',
        'id':'6'
    },
    {
        'status':'donated',
        'restaurant':'KFC',
        'date':'11/11/2021',
        'amount':'-$1.300',
        'id':'9'
    },
    {
        'status':'donated',
        'restaurant':'KFC',
        'date':'11/11/2021',
        'amount':'-$1.300',
        'id':'7'
    },
    {
        'status':'donated',
        'restaurant':'KFC',
        'date':'11/11/2021',
        'amount':'-$1.300',
        'id':'8'
    }
]

const dCards = (d,i)=>{
    return(
        <View style={{...styles.flexRow,paddingHorizontal:20,justifyContent:'space-between',width:'100%',marginTop:i == 0 ? 20 : 50}}>
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
const DonationHistory = ({navigation})=>{
    return(
        <View style={styles.container}>
            <StackHeader navigation={navigation} name={'Donation History'} />
            <View style={{marginTop:10}}>

            <SafeAreaView >
                <FlatList
                    data={donationHistory}
                    renderItem={({ item, index }) => (
                        dCards(item,index)
                    )}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    // ListHeaderComponent={
                    //     <View style={{padding:20}}>
                    //         <Text style={{fontSize:26,fontWeight: 'bold'}}>All Restaurants</Text>
                    //     </View>
                    // }
                />
            </SafeAreaView>
            </View>
        </View>
    )
}

export default DonationHistory;

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
        fontSize:16,color:'#666666'
    }
})