import React,{useState,useContext} from 'react';
import { View, Text, StyleSheet, Alert,Pressable,Dimensions,TouchableOpacity ,KeyboardAvoidingView} from 'react-native';
import { Image, Button, Icon,Input } from 'react-native-elements';

import SCheader from '../components/screensheader'
import MapView, { PROVIDER_GOOGLE,Marker, AnimatedRegion } from 'react-native-maps';
import GetLocation from 'react-native-get-location'
import Cloc from '../assets/svg/clocation.svg'
import Geolocation from '@react-native-community/geolocation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const { width, height } = Dimensions.get('window');


function log(eventName, e) {
  console.log(eventName, e.nativeEvent);
}
const MapModal = ({navigation}) => {
    
    const ASPECT_RATIO = width / height;
    const [LATITUDE,setLATITUDE] = useState(37.4219483);
    const [LONGITUDE,setLONGITUDE] = useState(-122.0840039);
    const [LATITUDE_DELTA,setLATITUDE_DELTA] = useState(0.05);
    const [LONGITUDE_DELTA,setLONGITUDE_DELTA] = useState(LATITUDE_DELTA * ASPECT_RATIO);

    const currentLocation = ()=> {
      // GetLocation.getCurrentPosition({
      //   enableHighAccuracy: true,
      //   timeout: 15000,
      // })
      // .then(location => {
      //     console.log(location);
      //     setLATITUDE(location.latitude)
      //     setLONGITUDE(location.longitude)
      //     setLATITUDE_DELTA(0.05)
      //     setLONGITUDE_DELTA(0.05)
      // })
      // .catch(error => {
      //     const { code, message } = error;
      //     console.warn(code, message);
      // })
      Geolocation.getCurrentPosition(info => console.log(info));
    }

    // const markerDrag = (e) => {
    //   setLATITUDE(e.latitude)
    //   setLONGITUDE(e.longitude)
    // }

    const setRegion = (e) => {
      console.log(e)
      setLATITUDE(e.latitude)
      setLONGITUDE(e.longitude)
      setLATITUDE_DELTA(e.latitudeDelta)
      setLONGITUDE_DELTA(e.longitudeDelta)
    }

    return(
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <SCheader navigation={navigation} backbutton={true} name={'Map'} wallet={false}  />
              <View style={{position:'absolute',bottom:50,left:0,zIndex:9999,width:'100%',paddingHorizontal:20}}>
                <View>

                  <View style={{alignItems:'flex-end'}}>
                    <TouchableOpacity style={{paddingVertical:10,paddingHorizontal:8,backgroundColor:'#fff',borderRadius:50,elevation:5,marginBottom:20,width:43}} onPress={()=>currentLocation()}>
                      <Cloc style={{fill:'#2196F3',height:25,width:25}} />
                    </TouchableOpacity>
                  </View>
                  <Button
                      title="Save"
                      type="solid"
                      
                      buttonStyle={{
                          backgroundColor:'#1E3865',
                          padding:15,
                          borderRadius:15,
                      }}
                  />
                  
                </View>
              </View>
                <View style={styles.markerFixed}>
                  <Image source={{uri:"https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"}} style={{height: 35, width:35 }} />
                </View>
              <View style={{position:'absolute',top:80,left:0,zIndex:9999,width:'100%',paddingHorizontal:20}}>
              <GooglePlacesAutocomplete
                query={{
                  key: 'AIzaSyBfX3nuExh13kcWSNhwhbSD7J3LNHldO-w',
                  language: 'en', // language of the results
                }}
                placeholder='Search'
                onPress={(data, details) => console.log(data, details)}
                textInputProps={{
                  // InputComp: Input,
                  // leftIcon: { type: 'font-awesome', name: 'chevron-left' },
                  errorStyle: { color: 'red' },
                }}
              />
              </View>
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
        width:width,
        position:'relative'
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
      },markerFixed: {
        left: '50%',
        marginLeft: -24,
        marginTop: -48,
        position: 'absolute',
        top: '50%',
        zIndex:999,
      },
})