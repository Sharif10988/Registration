import * as React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import {
    View,
    Button,
    TextInput,
    StyleSheet
  } from 'react-native'

const RegistrationScreen =({navigation})=>{

    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, serPhone_number] = useState("");
    return(

            <View style={styles.container}>
              <TextInput
                style={styles.input}
                placeholder='Username'
                autoCapitalize="none"
                placeholderTextColor='white'
                onChangeText={val => this.onChangeText('username', val)}
              />
              <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
                autoCapitalize="none"
                placeholderTextColor='white'
                onChangeText={val => this.onChangeText('password', val)}
              />
              <TextInput
                style={styles.input}
                placeholder='Email'
                autoCapitalize="none"
                placeholderTextColor='white'
                onChangeText={val => this.onChangeText('email', val)}
              />
              <TextInput
                style={styles.input}
                placeholder='Phone Number'
                autoCapitalize="none"
                placeholderTextColor='white'
                onChangeText={val => this.onChangeText('phone_number', val)}
              />
              <Button
                title='Sign Up'
                onPress={()=>""}
              />
            </View>
     
    );
}
const styles = StyleSheet.create({
    input: {
      width: 350,
      height: 55,
      backgroundColor: '#42A5F5',
      margin: 10,
      padding: 8,
      color: 'white',
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '500',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

  export default RegistrationScreen;