import React, { useContext,useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
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
import LogOut from '../assets/svg/logoutIcon.svg';
import AppContext from '../components/appcontext'




const DrawerContent = ({ navigation }) => {

    const myContext = useContext(AppContext);
    const [toggleIcon,settoggleIcon] = useState(false)
    return (
        <View style={{ flex: 1, backgroundColor: '#000', paddingBottom: 30, paddingLeft: 20, paddingRight: 20, paddingTop: 20, borderTopRightRadius: 30 }}>
            <DrawerContentScrollView>
                {/* <View style={styles.flexCon} >
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg' }}
                        style={{ width: 65, height: 70, borderRadius: 13 }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <View style={{ width: 190 }}>
                        <Title style={{ ...styles.textStyle, color: '#fff' }}>Noah Conner</Title>
                        <Text style={{ ...styles.textStyle, ...styles.email }} numberOfLines={1} ellipsizeMode={'tail'} >noahConner@gmail.com</Text>
                    </View>
                </View> */}

                <Drawer.Section style={{ marginTop: 50 }}>

                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                        <View style={{ ...styles.flexCon, marginTop: 30 }}>
                            <LogOut style={{ fill: '#fff', width: '28', height: '28' }} />
                            <Text style={styles.textStyle}>Profile</Text>
                        </View>
                    </TouchableOpacity>
                </Drawer.Section>

            </DrawerContentScrollView>
            <Drawer.Section>
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
        fontSize: 20,
        fontWeight: 'bold',
        color: '#888888'
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