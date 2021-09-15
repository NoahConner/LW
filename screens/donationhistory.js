import React,{useRef} from 'react';
import { View, Text, StyleSheet, Button,FlatList,SafeAreaView,TouchableOpacity } from 'react-native';
import StackHeader from '../components/stackheader'
import Coupon from '../assets/svg/coupon.svg'
import RBSheet from "react-native-raw-bottom-sheet";
import { ScrollView } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

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

const dCards = (d,i,refRBSheet)=>{
    return(
        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <View style={{...styles.flexRow,paddingHorizontal:20,justifyContent:'space-between',width:'100%',marginTop:i == 0 ? 20 : 50}}>
                <View style={styles.flexRow}>
                    <Coupon style={{marginRight:15}} />
                    <View style={{flexDirection:'column'}}>
                        <View style={styles.flexRow}>
                            <Text style={{fontWeight:'bold',fontSize:RFPercentage(2.5)
                            ,marginRight:20}}>Donated</Text>
                            <Text style={styles.dater}>11/11/2021</Text>
                        </View>
                        <Text style={styles.dater}>KFC</Text>
                    </View>
                </View>
                <View>
                    <Text style={{fontWeight:'bold',fontSize:RFPercentage(2.5)}}>-$1.300</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const DonationHistory = ({navigation})=>{
    const refRBSheet = useRef();
    return(
        <View style={styles.container}>
            <StackHeader navigation={navigation} name={'Donation History'} />
            <View style={{marginTop:10}}>

            <SafeAreaView >
                <FlatList
                    data={donationHistory}
                    renderItem={({ item, index }) => (
                        dCards(item,index,refRBSheet)
                    )}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
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
                height={425}
            >
                <ScrollView style={{paddingBottom:20}}>
                <View style={{padding:20}}>
                    <Text style={{fontWeight: "bold",fontSize: RFPercentage(2.8),marginBottom:15,borderBottomWidth:1,borderBottomColor: "#666",paddingBottom:15}}>Donation Details</Text>
                    
                    <View style={{...styles.flexRow,marginTop:15}}>
                        <View style={{...styles.flexRow,alignItems: "flex-start"}}>
                            <Text style={{fontSize:RFPercentage(2.5),fontWeight: "bold",marginTop:-3}}>Date/Time:</Text>
                            <Text style={{fontSize:RFPercentage(2),marginLeft: 16,flexShrink: 1 }}>4 August, 1821 5:12 am</Text>
                        </View>
                    </View>
                    <View style={{...styles.flexRow,marginTop:15}}>
                        <View style={{...styles.flexRow,alignItems: "flex-start"}}>
                            <Text style={{fontSize:RFPercentage(2.5),fontWeight: "bold",marginTop:-3}}>Resturant:</Text>
                            <Text style={{fontSize:RFPercentage(2),marginLeft: 16,flexShrink: 1 }}>KFC</Text>
                        </View>
                    </View>
                    <View style={{...styles.flexRow,marginTop:15}}>
                        <View style={{...styles.flexRow,alignItems: "flex-start"}}>
                            <Text style={{fontSize:RFPercentage(2.5),fontWeight: "bold",marginTop:-3}}>Amount:</Text>
                            <Text style={{fontSize:RFPercentage(2),marginLeft: 16,flexShrink: 1 }}>-$40.00</Text>
                        </View>
                    </View>

                    <View style={{...styles.flexRow,marginTop:15}}>
                        <View style={{...styles.flexRow,alignItems: "flex-start"}}>
                            <Text style={{fontSize:RFPercentage(2.5),fontWeight: "bold",marginTop:-3}}>Coupon:</Text>
                            <Text style={{fontSize:RFPercentage(2),marginLeft: 16,flexShrink: 1 }}>B45IUOPL</Text>
                        </View>
                    </View>

                    <View style={{...styles.flexRow,marginTop:15}}>
                        <View style={{...styles.flexRow,alignItems: "flex-start"}}>
                            <Text style={{fontSize:RFPercentage(2.5),fontWeight: "bold",marginTop:-3}}>Coupon Status:</Text>
                            <Text style={{fontSize:RFPercentage(2),marginLeft: 16,flexShrink: 1 }}>Withdrawal</Text>
                        </View>
                    </View>

                    <View style={{...styles.flexRow,marginTop:15}}>
                        <View style={{...styles.flexRow,alignItems: "flex-start"}}>
                            <Text style={{fontSize:RFPercentage(2.5),fontWeight: "bold"}}>Withdrawal Time:</Text>
                            <Text style={{fontSize:RFPercentage(2),marginLeft: 16,flexShrink: 1 }}>4 August, 1821 9:38 am</Text>
                        </View>
                    </View>

                    <View style={{...styles.flexRow,marginTop:15}}>
                        <View style={{...styles.flexRow,alignItems: "flex-start"}}>
                            <Text style={{fontSize:RFPercentage(2.5),fontWeight: "bold",marginTop:-3}}>Leaper Name:</Text>
                            <Text style={{fontSize:RFPercentage(2),marginLeft: 16,flexShrink: 1 }}>Ethen James</Text>
                        </View>
                    </View>

                    <View style={{...styles.flexRow,marginTop:15}}>
                        <View style={{...styles.flexRow,alignItems: "flex-start"}}>
                            <Text style={{fontSize:RFPercentage(2.5),fontWeight: "bold",marginTop:-3}}>Leaper DOB:</Text>
                            <Text style={{fontSize:RFPercentage(2),marginLeft: 16,flexShrink: 1 }}>06 Sep, 1995</Text>
                        </View>
                    </View>

                    

                </View>
                </ScrollView>
            </RBSheet>
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
        fontSize:RFPercentage(2),color:'#666666'
    }
})