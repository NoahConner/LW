import React, { useState, useRef,useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity,Image ,ActivityIndicator } from 'react-native';
import { Icon ,CheckBox,Input, Button   } from 'react-native-elements';
import StackHeader from '../components/stackheader'
import EditIcon from '../assets/svg/edit.svg'
import { ScrollView } from 'react-native-gesture-handler';
import RBSheet from "react-native-raw-bottom-sheet";

const Profile = ({navigation})=>{
    const refRBSheet = useRef();
    const [editCOn,seteditCOn] = useState('name');
    const editCard = ()=>{
        return(
            <View style={styles.mainCard}>
                {
                    editCOn == 'name' ? 
                    (
                        <>
                            <Text style={{fontSize:18}}>Name</Text>
                            <Input
                                placeholder='Jacb Gomez'
                                containerStyle={{
                                    ...styles.textContainerStyle,
                                    marginBottom:10
                                }}
                                inputContainerStyle={{
                                    ...styles.inputContainerStyle
                                }}
                            />
                        </>
                    ) 
                    : 
                    editCOn == 'email' ?
                    (
                        <>
                            <Text style={{fontSize:18}}>Email</Text>
                            <Input
                                placeholder='jacob@gmail.com'
                                containerStyle={{
                                    ...styles.textContainerStyle,
                                    marginBottom:10
                                }}
                                inputContainerStyle={{
                                    ...styles.inputContainerStyle
                                }}
                            />
                        </>
                    )
                    :
                    editCOn == 'phone' ?
                    (
                        <>
                            <Text style={{fontSize:18}}>Phone</Text>
                            <Input
                                placeholder='+1234567898'
                                containerStyle={{
                                    ...styles.textContainerStyle,
                                    marginBottom:10
                                }}
                                inputContainerStyle={{
                                    ...styles.inputContainerStyle
                                }}
                            />
                        </>
                    )
                    :
                    null
                }
            </View>
        )
    }
    const openSheet = (n)=>{
        seteditCOn(n);
        refRBSheet.current.open();
    }

    return (
        <View style={styles.container}>
            <StackHeader navigation={navigation} name={'Profile'} />
            <ScrollView style={{padding:20,marginTop:10,paddingBottom:10}}>
                <View style={styles.mainCard}>
                    <Text style={{fontSize:18}}>Name</Text>
                    <Text style={{fontSize:20,color:'#000',fontWeight:'bold',marginTop:10}}>Jacob Gomez</Text>
                    <TouchableOpacity style={{position:'absolute',right:15,top:10}} onPress={() => openSheet('name')}>
                        <EditIcon style={{height:35,width:20}}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.mainCard}>
                    <Text style={{fontSize:18}}>Email</Text>
                    <Text style={{fontSize:20,color:'#000',fontWeight:'bold',marginTop:10}}>jacob@gmail.com</Text>
                    <TouchableOpacity style={{position:'absolute',right:15,top:10}} onPress={() => openSheet('email')}>
                        <EditIcon style={{height:35,width:20}}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.mainCard}>
                    <Text style={{fontSize:18}}>Phone</Text>
                    <Text style={{fontSize:20,color:'#000',fontWeight:'bold',marginTop:10}}>+1234567898</Text>
                    <TouchableOpacity style={{position:'absolute',right:15,top:10}} onPress={() => openSheet('phone')}>
                        <EditIcon style={{height:35,width:20}}/>
                    </TouchableOpacity>
                </View>
            </ScrollView>

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
                height={280}
            >
                <View style={{padding:20}}>
                    {editCard()}
                    <View >
                        <Button
                            title="Save"
                            buttonStyle={{
                                backgroundColor:'#1E3865',
                                padding:15,
                                borderRadius:15
                            }}
                        />
                    </View>
                </View>
            </RBSheet>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    flexRow: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    mainCard:{
        backgroundColor:'#F6F8FA',padding:20,borderRadius:12,position: 'relative',marginBottom:20
    },
    textContainerStyle:{
        width:'100%',
        backgroundColor:'#fff',
        color:'#000',
        borderRadius:15,
        paddingBottom:0,
        height:60,
        marginTop:10
    },
    inputContainerStyle:{
        paddingBottom:0,
        borderColor:'transparent',
        marginTop:6
    }
})