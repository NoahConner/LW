import React from 'react';
import { View, Text, StyleSheet, Button,ScrollView } from 'react-native';
import Header from '../components/header'

const Home = ({navigation})=>{
    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={{width: '100%'}}>
                    <Header  />
                </View>
            </View>
        </ScrollView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1,
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#f1f1f1'
    }
})