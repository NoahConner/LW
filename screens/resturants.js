import React, { useState, useRef,useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity,Image ,ActivityIndicator } from 'react-native';
import { Icon ,CheckBox } from 'react-native-elements';
import RBSheet from "react-native-raw-bottom-sheet";
import SCheader from '../components/screensheader'
import { ScrollView } from 'react-native-gesture-handler';


var allRestT = [
    {
        'deal_name':'deal 1',
        'image':'https://www.visitdanvillearea.com/wp-content/uploads/2015/08/McDonalds-Logo-square.jpg',
        'deal':'Burger, Shake, Fries',
        'id':'1'
    },
    {
        'deal_name':'deal 2',
        'image':'https://www.visitdanvillearea.com/wp-content/uploads/2015/08/McDonalds-Logo-square.jpg',
        'deal':'Burger, Shake, Fries',
        'id':'2'
    },
    {
        'deal_name':'deal 3',
        'image':'https://www.visitdanvillearea.com/wp-content/uploads/2015/08/McDonalds-Logo-square.jpg',
        'deal':'Burger, Shake, Fries,Shake, Fries',
        'id':'3'
    },
]
const mcCards = (d,i,navigation)=>{
    return (
        <TouchableOpacity onPress={()=> navigation.navigate('Resturants')} key={i}>
            <View style={styles.mcCard} key={d.id}>
                <View style={{backgroundColor:'#fff',borderRadius: 8,overflow: 'hidden'}}>
                    <Image
                        source={{ uri: d.image }}
                        style={{ width: 65, height: 70,  resizeMode: 'contain' }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                </View>
                <View style={{marginLeft:15,width:'100%',paddingRight:100,...styles.flexRow,width:'100%',justifyContent: 'space-between'}}>
                    <View >
                        <Text style={{fontWeight:'bold',fontSize:20,marginBottom:5}}>{d.deal_name}</Text>
                        <View style={{flexDirection: 'row',alignItems: 'center'}}>
                            <Text numberOfLines={1} style={{fontSize:16,width:'80%'}}>{d.deal} </Text>
                        </View>
                    </View>
                    <View >
                        <Text style={{fontWeight:'bold',fontSize:20,marginBottom:5}}>$20.00</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const Resturants = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View>
            <SCheader navigation={navigation} backbutton={true} wallet={true}  />
                <View style={{width: '100%', height: 220,backgroundColor: '#1e3865a3',position:'relative'}}>
                    <Text style={{color:'#fff', fontSize:26,fontWeight:'bold',position:'absolute',bottom:40,left:20}}>McDonald</Text>
                </View>
                <View>
                    <View style={{backgroundColor:'#fff',width:'100%',height:'100%',borderTopLeftRadius:30,borderTopRightRadius:30,marginTop:-30,paddingHorizontal:20}}>
                        <Text style={{color:'#000', fontSize:20, fontWeight: 'bold', marginTop:20}}>Deals</Text>
                        <ScrollView style={{paddingTop:20}}>
                            {
                                allRestT.map((items,i)=>{
                                    return(
                                        mcCards(items,i,navigation)
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Resturants;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    mcCard:{
        backgroundColor:'#F6F8FA',
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        borderRadius:12,textAlign: 'center',
        padding:12,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:15,
    },
    flexRow: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
})