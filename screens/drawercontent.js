import React, { useContext,useState } from 'react';
import { View, StyleSheet, TouchableOpacity,ActivityIndicator } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import { Image, Button,Icon } from 'react-native-elements';
import AppContext from '../components/appcontext'
import LogOut from '../assets/svg/logoutIcon.svg';
import ProfileIcon from '../assets/svg/profileIcon.svg';
import DepositeIcon from '../assets/svg/deposite.svg';
import PaymentIcon from '../assets/svg/paymentIcon.svg';
import DonationIcon from '../assets/svg/historyIcon.svg';
import PrivacyIcon from '../assets/svg/accept.svg'; 
import TermsIcon from '../assets/svg/insurance.svg'; 
import DepoHis from '../assets/svg/deposite-history.svg'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Collapsible from 'react-native-collapsible';
import LegalIcon from '../assets/svg/legalicon.svg'
import SocialIcon from '../assets/svg/social-media.svg'
import CrossIco from '../assets/svg/x-mark.svg'


const DrawerContent = ({ navigation }) => {

    const myContext = useContext(AppContext);
    const [toggleIcon,settoggleIcon] = useState(false);
    const [collapse,setCollapse] = useState(true);
    const [collapse2,setCollapse2] = useState(true);
    return (
        <View style={{ flex: 1, paddingBottom: 30 }}>
           
                <View style={{...styles.flexCon,backgroundColor: '#FF3C40',alignItems: 'flex-end',position:'relative',paddingLeft:20,paddingVertical:10}} >
                    <View style={{flexDirection:'row',width:'100%',alignItems: 'center'}}>
                        <View style={{ width: 65, height: 70, borderRadius: 10, backgroundColor:'#FFFFFF', display: 'flex', alignItems: 'center' , justifyContent: 'center',overflow: 'hidden'}}>
                            {
                                myContext.profileImagee == null ? (
                                    <><Text style={{ fontSize:RFPercentage(3),fontFamily:'Gilroy-Bold',color:"#FF3C40"}}>JG</Text></>
                                ) : (
                                    <>
                                        <Image
                                            source={{ uri: myContext.profileImagee}}
                                            style={{ width: 65, height: 70,  resizeMode: 'cover' }}
                                            PlaceholderContent={<ActivityIndicator />}
                                        />
                                    </>
                                )
                            }
                        </View>
                        <View style={{ width: '80%'}} numberOfLines={1}>
                            <Title style={{ ...styles.textStyle, color: '#fff',marginLeft:10,fontSize:RFPercentage(3),fontFamily:'Gilroy-Bold'}} numberOfLines={1}>Jacob Gomez</Title>
                        </View>
                    </View>
                    <TouchableOpacity style={{position: 'absolute',right: 15, top:15}} onPress={() => navigation.closeDrawer()}>
                        <CrossIco />
                    </TouchableOpacity>
                </View>
            <DrawerContentScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 40,paddingLeft:20,paddingRight:20,paddingBottom:30}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('DepositeAmount')}>
                        <View style={{ ...styles.flexCon, marginBottom: 35 }}>
                            <DepositeIcon style={{ fill: '#fff', width: 28, height: 28 }} />
                            <Text style={styles.textStyle}>Deposit</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
                        <View style={{ ...styles.flexCon, marginBottom: 35 }}>
                            <ProfileIcon style={{ fill: '#fff', width: 28, height: 25 }} />
                            <Text style={styles.textStyle}>Profile</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('PaymentMethod')}>
                        <View style={{ ...styles.flexCon, marginBottom: 35 }}>
                            <PaymentIcon style={{ fill: '#fff', width: 28, height: 22 }} />
                            <Text style={styles.textStyle}>Payment Method</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('DonationHistory')} >
                        <View style={{ ...styles.flexCon, marginBottom: 35 }}>
                            <DonationIcon style={{ fill: '#fff', width: 28, height: 24 }} />
                            <Text style={styles.textStyle}>Donation History</Text>
                        </View>
                    </TouchableOpacity>
                     <TouchableOpacity onPress={()=>navigation.navigate('DepositHistory')} >
                        <View style={{ ...styles.flexCon, marginBottom: 35 }}>
                            <DepoHis style={{ fill: '#fff', width: 28, height: 24 }} />
                            <Text style={styles.textStyle}>Deposit History</Text>
                        </View>
                    </TouchableOpacity>
                    {/*<TouchableOpacity onPress={()=>navigation.navigate('TermCondition')} >
                        <View style={{ ...styles.flexCon, marginBottom: 35 }}>
                            <PrivacyIcon style={{  width: 28, height: 24 }} />
                            <Text style={styles.textStyle}>Terms & Condition</Text>
                        </View>
                    </TouchableOpacity> */}
                    <TouchableOpacity  onPress={()=>setCollapse(!collapse)} >
                        <View style={{ ...styles.flexCon, marginBottom: 25,position:'relative' }}>
                            <LegalIcon style={{  width: 28, height: 24 }} />
                            <Text style={styles.textStyle}>Legals</Text>

                            <Icon
                                name='angle-down'
                                type='font-awesome'
                                color='#f50'
                                containerStyle={{
                                    position:'absolute',
                                    right:0,
                                    transform: [{ rotate: !collapse ? "180deg" : '360deg'}]
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={{marginBottom:collapse ? 0 : 20}}>
                        <Collapsible collapsed={collapse} style={{backgroundColor:'#f1f1f1',padding:20,borderRadius:10}}>
                            <TouchableOpacity onPress={()=>navigation.navigate('PrivacyPolicy')} >
                                <View style={{ ...styles.flexCon, marginBottom: 20 }}>
                                    <TermsIcon style={{  width: 28, height: 24 }} />
                                    <Text style={{...styles.textStyle,fontSize:RFPercentage(2),color:'#666'}}>Privacy Policy</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigation.navigate('TermCondition')} >
                                <View style={{ ...styles.flexCon }}>
                                    <PrivacyIcon style={{  width: 28, height: 24 }} />
                                    <Text style={{...styles.textStyle,fontSize:RFPercentage(2),color:'#666'}}>Terms & Condition</Text>
                                </View>
                            </TouchableOpacity>
                        </Collapsible>
                    </View>

                    <TouchableOpacity  onPress={()=>setCollapse2(!collapse2)} >
                        <View style={{ ...styles.flexCon, marginBottom: 25,position:'relative' }}>
                            <SocialIcon  style={{  width: 28, height: 24 }} />
                            <Text style={styles.textStyle}>Share Us</Text>

                            <Icon
                                name='angle-down'
                                type='font-awesome'
                                color='#f50'
                                containerStyle={{
                                    position:'absolute',
                                    right:0,
                                    transform: [{ rotate: !collapse2 ? "180deg" : '360deg'}]
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={{marginBottom:collapse2 ? 0 : 20}}>
                        <Collapsible collapsed={collapse2} style={{backgroundColor:'#f1f1f1',padding:20,borderRadius:10}}>
                            <TouchableOpacity >
                                <View style={{ ...styles.flexCon, marginBottom: 20 }}>
                                    {/* <TermsIcon style={{  width: 28, height: 24 }} /> */}
                                        <Icon
                                            name='facebook-square'
                                            type='font-awesome'
                                            color='#1877f2'
                                            iconStyle={{fontSize:26,width: 28}}
                                         />
                                    <Text style={{...styles.textStyle,fontSize:RFPercentage(2),color:'#666'}}>Facebook</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={{ ...styles.flexCon, marginBottom: 20 }}>
                                    {/* <PrivacyIcon style={{  width: 28, height: 24 }} /> */}
                                    <Icon
                                        name='linkedin'
                                        type='font-awesome'
                                        color='#0073b1'
                                        iconStyle={{fontSize:26,width: 28}}
                                    />
                                    <Text style={{...styles.textStyle,fontSize:RFPercentage(2),color:'#666'}}>LinkedIn</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={{ ...styles.flexCon }}>
                                    {/* <PrivacyIcon style={{  width: 28, height: 24 }} /> */}
                                    <Icon
                                        name='twitter'
                                        type='font-awesome'
                                        color='#1d9bf0'
                                        iconStyle={{fontSize:26,width: 28}}
                                    />
                                    <Text style={{...styles.textStyle,fontSize:RFPercentage(2),color:'#666'}}>Twitter</Text>
                                </View>
                            </TouchableOpacity>
                        </Collapsible>
                    </View>

                </View>

            </DrawerContentScrollView>
            <View style={{paddingLeft:20,marginTop:20}}>
                <TouchableOpacity onPress={() => { myContext.setuserToken(null) }}>
                    <View style={styles.flexCon}>
                        <LogOut style={{ fill: '#fff', width: 28, height:24 }} />
                        <Text style={styles.textStyle}>Log out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    flexCon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        fontFamily: 'Gilroy-Medium',
        marginLeft: 20,
        fontSize: RFPercentage(2.2),
        color: '#000'
    },
    email:
    {
        textAlign: 'center',
        color: '#fff',
        fontSize: RFPercentage(2.2),
        paddingEnd: 10,
    }
})


export default DrawerContent;