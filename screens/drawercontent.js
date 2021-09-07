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



const DrawerContent = ({ navigation }) => {

    const myContext = useContext(AppContext);
    const [toggleIcon,settoggleIcon] = useState(false)
    return (
        <View style={{ flex: 1, paddingBottom: 30 }}>
            <DrawerContentScrollView>
                <View style={{...styles.flexCon,backgroundColor: '#FF3C40',alignItems: 'flex-end',paddingLeft:20,paddingRight:10,paddingBottom:10,marginTop:10,marginTop:-5,position:'relative'}} >
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg' }}
                        style={{ width: 65, height: 70, borderRadius: 8,marginTop:50 }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <View style={{ width: '80%'}} numberOfLines={1}>
                        <Title style={{ ...styles.textStyle, color: '#fff',marginLeft:10,fontSize:24,fontWeight: 'bold'}} numberOfLines={1}>Jacob Gomez</Title>
                        {/* <Text style={{ ...styles.textStyle, ...styles.email }} numberOfLines={1} ellipsizeMode={'tail'} >noahConner@gmail.com</Text> */}
                    </View>
                    <View style={{position: 'absolute',right: 10, top:10}}>
                        <Icon
                        name='times'
                        type='font-awesome'
                        color='#FF3C40'
                        containerStyle={{
                            backgroundColor:'#fff',
                            borderRadius:50,
                            paddingTop:5,
                            paddingBottom:5,
                            paddingRight:7,
                            paddingLeft:7,
                        }}
                        onPress={() => navigation.closeDrawer()} />
                    </View>
                </View>

                <Drawer.Section style={{ marginTop: 70,paddingLeft:20,paddingRight:20}}>

                    <TouchableOpacity onPress={()=> navigation.navigate('DepositeAmount')}>
                        <View style={{ ...styles.flexCon, marginBottom: 40 }}>
                            <DepositeIcon style={{ fill: '#fff', width: '28', height: '28' }} />
                            <Text style={styles.textStyle}>Deposite</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ ...styles.flexCon, marginBottom: 40 }}>
                            <ProfileIcon style={{ fill: '#fff', width: '28', height: '28' }} />
                            <Text style={styles.textStyle}>Profile</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('PaymentMethod')}>
                        <View style={{ ...styles.flexCon, marginBottom: 40 }}>
                            <PaymentIcon style={{ fill: '#fff', width: '28', height: '28' }} />
                            <Text style={styles.textStyle}>Payment Method</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('DonationHistory')} >
                        <View style={{ ...styles.flexCon, marginBottom: 40 }}>
                            <DonationIcon style={{ fill: '#fff', width: '28', height: '28' }} />
                            <Text style={styles.textStyle}>Donation History</Text>
                        </View>
                    </TouchableOpacity>
                </Drawer.Section>

            </DrawerContentScrollView>
            <Drawer.Section style={{paddingLeft:20}}>
                <TouchableOpacity onPress={() => { myContext.setuserToken(null) }}>
                    <View style={styles.flexCon}>
                        <LogOut style={{ fill: '#fff', width: '28', height: '28' }} />
                        <Text style={styles.textStyle}>Log out</Text>
                    </View>
                </TouchableOpacity>
            </Drawer.Section>
        </View>
    );
}



const styles = StyleSheet.create({
    flexCon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        fontFamily: 'Montserrat',
        marginLeft: 20,
        fontSize: 19,
        color: '#000'
    },
    email:
    {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        paddingEnd: 10,
    }
})


export default DrawerContent;