import 'react-native-gesture-handler';
import React,{useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator,HeaderStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AppContext  from './components/appcontext';
import Home from './screens/home'
import PreLogin from './screens/prelogin'
import Login from './screens/login'
import SignIn from './screens/signin'
import DrawerContent from './screens/drawercontent';
import DonationHistory from './screens/donationhistory'
import PaymentMethod from './screens/payment-method'
import DepositeAmount from './screens/deposite-amount'
import ConfirmPayment from './screens/confirm-payment'

const App = (navigation) => {

  const [userToken, setuserToken] = useState('null');
  const [CongratesModal,setCongratesModal] = useState(false);
  const [SorryModal,setSorryModal] = useState(false);
  const [CouponModal,setCouponModal] = useState(false);
  const userSettings = {
    setting1name: userToken,
    CongratesModalCon:CongratesModal,
    setuserToken,
    setCongratesModal,
    setSorryModal,
    setCouponModal
  };


  const Root = ({navigation}) => {
    const isSignout = true
    if(userToken == null){
      navigation.closeDrawer();
    }


    return (
      <Stack.Navigator >
        {userToken == null ? (
          <>
          <Stack.Screen
            name="PreLogin"
            component={PreLogin}
            options={{
              title: '',
              animationTypeForReplace: isSignout ? 'pop' : 'push',
              headerShown:false,
              headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            }}
          />
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
          <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}  />
          
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}} onPress={()=>navigation.navigate('Home',{data:userToken})} />
            <Stack.Screen name="DonationHistory" component={DonationHistory} options={{headerShown:false}}/>
            <Stack.Screen name="PaymentMethod" component={PaymentMethod} options={{headerShown:false}}/>
            <Stack.Screen name="DepositeAmount" component={DepositeAmount} options={{headerShown:false}}/>
            <Stack.Screen name="ConfirmPayment" component={ConfirmPayment} options={{headerShown:false}}/>
          </>
        )}
      </Stack.Navigator>
    );
  }

  return(
  <AppContext.Provider value={userSettings}>
    <NavigationContainer>
       <Drawer.Navigator
        // screenOptions={{swipeEnabled: false}}
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#fff',
            width: '85%',
            borderTopEndRadius:25,
            borderBottomEndRadius:25,
            overflow: 'hidden',
          },
        }}
        drawerContent={(props) => <DrawerContent {...props} />}
        initialRouteName="Root"
        >
        <Drawer.Screen name="List" options={{headerShown:false}} component={Root} />
      </Drawer.Navigator>
    </NavigationContainer>
  </AppContext.Provider>
  );
}

export default App;

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})