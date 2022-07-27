import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import {InputField} from '../components';

export default function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onHandleSignup = () => {
    if (email !== '' && password !== '') {
  createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log('Signup success'))
        .catch(err => console.log(`Login err: ${err}`));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        <Text style={styles.titleTextsmall}>
          Hello, There
          {"\n"}          
        </Text>
        <Text style={styles.titleTextlarge}>            
          Sign Up
          {"\n"}         
        </Text>
      </Text>
      <Image style={styles.image} source={require("./asset/std-needs-logo.png")} />
      
      <TextInput
        style={styles.input}
        color="#FFF"
        placeholder='Enter email'
        placeholderTextColor="#FFF"
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType='emailAddress'
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <InputField
        inputStyle={{fontSize: 16}}
        containerStyle={styles.input}
        color="#FFF"
        placeholderTextColor="#FFF"
        placeholder='Enter password'
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        textContentType='password'
        rightIcon={rightIcon}
        value={password}
        onChangeText={text => setPassword(text)}
        handlePasswordVisibility={handlePasswordVisibility}
      />
      <TouchableOpacity style={{alignSelf:'flex-end', color: 'white', marginTop: -10, paddingBottom: 5}} onPress={onHandleSignup}>
        <Text style={styles.baseText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.SignupBtn} onPress={onHandleSignup}>
        <Text style={styles.baseText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={{flexDirection:"row", marginTop:10, alignSelf:'center'}}>
        <Text style={styles.baseText}>
            Already Have an Account?{"   "}
        </Text>
        <TouchableOpacity style={{alignSelf:'flex-end', color: 'white', paddingBottom: 5}} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.baseText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //Container
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: "#23355F",
    paddingTop: 70,
    paddingHorizontal: 20,
  },

  //Inputbox & Button
  input: {
    backgroundColor: "#51699E",
    marginBottom: 25,
    fontSize: 16,
    borderRadius: 8,
    paddingHorizontal: 15,
    padding: 10,
    borderWidth: 2,
    borderColor: "#FFFFFF"
  },
  SignupBtn: {
    width: "80%",
    borderRadius: 10,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 5,
    backgroundColor: "#51699E",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    alignSelf: 'center'
  },

  //Image
  image: {
    marginBottom: 20,
    width: 190,
    height: 190,
    alignSelf: 'center',
    //resizeMode: 'contain'
  },

  //Text
  baseText: {
    textAlign: 'center',
    //alignSelf: 'center',
    color: 'white',
    paddingBottom: 5
  },
  titleTextlarge: {
    fontSize: 35,
    fontWeight: "bold",
  },

  titleTextsmall: {
    fontSize: 25,
    fontWeight: "bold"
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#444',
    alignSelf: 'center',
    paddingBottom: 24
  },
  
});