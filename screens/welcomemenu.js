import React, { useState, Component, useEffect } from "react";
import {StyleSheet, Text,  View,  Image,  TextInput,  Button,  TouchableOpacity,  Alert,  SafeAreaView} from 'react-native';

const Welcomemenu = ({navigation}) => {
  const [email, setEmail] = ("");
  const [password, setPassword] = ("");
  return (
    <View style={styles.container}>
      
      <Text style={styles.baseText}>
        <Text style={styles.titleTextsmall}>
          Welcome to  
          {"\n"}          
        </Text>
        <Text style={styles.titleTextlarge}>            
          Student Needs
          {"\n"}         
        </Text>
      </Text>

      <Image style={styles.image} source={require("./asset/std-needs-logo.png")} />
      
      <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate('Login')}>
        <Text style={styles.baseText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate('Signup')}>
        <Text style={styles.baseText}>Sign Up</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#23355F",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 5,
    width: 291,
    height: 291,
    //resizeMode: 'contain'
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
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
  },

  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    backgroundColor: "#51699E",
    borderWidth: 2,
    borderColor: "#FFFFFF"
  },

  baseText: {
    textAlign: 'center',
    //fontFamily: "Raleway",
    color: 'white'
  },

  titleTextlarge: {
    fontSize: 32,
    fontWeight: "bold",
  },

  titleTextsmall: {
    fontSize: 30,
    fontWeight: "bold"
  },

  smallText: {
    fontSize: 16,
  }
});

export default Welcomemenu;