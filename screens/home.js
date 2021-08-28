import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const Home = ({navigation})=>{
    return(
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Click Here" onClick={()=>{alert('Home Screen')}}></Button>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#f1f1f1'
    }
})