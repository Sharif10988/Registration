import * as React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import RegistrationScreen from './screens/Registration';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  
  TouchableOpacity
  
} from "react-native";

  //  Stack Navigator
const Stack = createStackNavigator();

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
       
      </View>
    

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      {/* <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>

        
      </TouchableOpacity> */}
      <Button
      title="Login"
      onPress={()=> navigation.navigate('RegistrationScreen')}
      />
      
      
    </View>
    
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#D2B1AA",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
  
forgot_button: {
  height: 30,
  marginBottom: 30,
},

Button: {
  width: "80%",
  borderRadius: 25,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 40,
  backgroundColor: "#FF1493",
},
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    textShadowColor: "green",
  },
 
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#CCB0AA",
  },
});
export default LoginScreen;