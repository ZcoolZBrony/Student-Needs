import * as React from 'react';
import { useState } from 'react';
import {StyleSheet, Text,  View,  Image, TouchableOpacity} from 'react-native';
import {InputField} from '../components';

export default function Mainmenu({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rightIcon] = useState('eye');
  
    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>
          <Text style={styles.titleTextsmall}>
            Good Morning
            {"\n"}          
          </Text>
          <Text style={styles.titleTextlarge}>            
            Raif
            {"\n"}         
          </Text>
        </Text>

        <InputField
          inputStyle={{fontSize: 16}}
          containerStyle={styles.input}
          color="black"
          placeholderTextColor="black"
          placeholder='Search'
          autoCapitalize='none'
          autoCorrect={false}
          rightIcon={rightIcon}
        />
        <TouchableOpacity style={styles.BSIBtn} onPress={() => navigation.navigate('statieqpmenu')}>
        <View style={{flexDirection: "row",justifyContent:"space-evenly"}}> 
            <Text style={{color: 'white', paddingTop:35, fontSize:18}}>Stationary</Text>
            <Text style={{color: 'white', paddingTop:35, fontSize:18}}>  =   </Text>
            <Image 
              style={styles.image} 
              source={require("./asset/stationary/stationary.png")} 
            />
            </View>
        </TouchableOpacity>
        <Text style={styles.baseText}>
          <Text style={styles.catagory}>
            {"\n"}
            Catagory
          </Text>
        </Text>

        <TouchableOpacity style={styles.catagoryBtn} onPress={() => navigation.navigate('ordersmenu')}>
          <View style={{flexDirection: "row",justifyContent:"center"}}>
            <Image 
              style={styles.catagoryimage} 
              source={require("./asset/shopping-cart.png")} 
            />
            <Text style={{color: '#23355F', paddingTop:30, fontSize:18}}>Orders</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catagoryBtn} onPress={() => navigation.navigate('historysmenu')}>
          <View style={{flexDirection: "row",justifyContent:"center"}}>
            <Image 
              style={styles.catagoryimage} 
              source={require("./asset/history.png")} 
            />
            <Text style={{color: '#23355F', paddingTop:30, fontSize:18}}>History</Text>
          </View>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
    //Container
    container: {
      flex: 1,
      backgroundColor: "#23355F",
      paddingTop: 50,
      paddingHorizontal: 15,
    },
  
    //Inputbox & Button
    input: {
      backgroundColor: "#F4F9F9",
      height:40,
      marginBottom: 25,
      fontSize: 16,
      borderRadius: 30,
      paddingHorizontal: 15,
      padding: 1,
      borderWidth: 2,
      borderColor: "#FFFFFF"
    },
    BSIBtn: {
      width: "100%",
      borderRadius: 20,
      height: 100,
      marginTop: 25,
      marginBottom: 5,
      backgroundColor: "#51699E",
      borderWidth: 2,
      borderColor: "#FFFFFF",
      alignSelf: 'center'
    },
    catagoryBtn: {
      width: "80%",
      borderRadius: 20,
      height: 90,
      marginTop: 20,
      backgroundColor: "#D5D5D5",
      borderWidth: 2,
      borderColor: "#FFFFFF",
      alignSelf:"center",
      paddingTop:3
    },
  
    //Image
    image: {
      marginTop: 10,
      width: 70,
      height: 70,
      alignSelf: 'center',
      //resizeMode: 'contain'
    },
    catagoryimage: {
      marginTop: 5,
      width: 70,
      height: 70,
      alignSelf: 'center',
      //resizeMode: 'contain'
    },
  
    //Text
    baseText: {
      //textAlign: 'center',
      //alignSelf: 'center',
      color: 'white',
      paddingBottom: 5
    },
    titleTextlarge: {
      fontSize: 25,
      fontWeight: "bold",
    },
  
    titleTextsmall: {
      fontSize: 20,
      fontWeight: "bold"
    },
  
    catagory: {
      fontSize: 24,
      fontWeight: '600',
      color: '#FFF',
      alignSelf: 'center',
    },
    
  });