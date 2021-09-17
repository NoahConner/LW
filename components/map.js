import React,{useState,useContext} from 'react';
import { View, Text, StyleSheet, Alert,Pressable,Dimensions } from 'react-native';
import { Image, Button, Icon } from 'react-native-elements';

import SCheader from '../components/screensheader'
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import GetLocation from 'react-native-get-location'

const { width, height } = Dimensions.get('window');

const MapModal = ({navigation}) => {
    
    const ASPECT_RATIO = width / height;
    const [LATITUDE,setLATITUDE] = useState(37.4219483);
    const [LONGITUDE,setLONGITUDE] = useState(-122.0840039);
    const LATITUDE_DELTA = 0.0922;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
    })
    .then(location => {
        console.log(location);
        setLATITUDE(location.latitude)
        setLONGITUDE(location.longitude)
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    })
    
    return(
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <SCheader navigation={navigation} backbutton={true} name={'Map'} wallet={false}  />
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{height:height,width:width}}
                initialRegion={{
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: LATITUDE,
                        longitude: LONGITUDE,
                        
                    }}
                    description={"This is a marker in React Natve"}
                >
                    <Image source={{uri:"https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"}} style={{height: 35, width:35 }} />
                </Marker>
            </MapView>
            
            </View>
        </View>
    )
}
export default MapModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        // margin: 20,
        backgroundColor: "white",
        // borderRadius: 20,
        // padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height:height,
        width:width
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})