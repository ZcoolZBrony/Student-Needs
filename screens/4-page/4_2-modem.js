import * as React from 'react';
import { useState } from 'react';
import {StyleSheet, Text,  View,  Image, TouchableOpacity, TextInput} from 'react-native';

export default function modem({ navigation }) {
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    //const [rightIcon] = useState('eye');
  
    return (
      <View style={styles.container}>
        <View style={styles.containertop}>
          <View style={{backgroundColor: "white", marginVertical:20, marginHorizontal:20, borderRadius:20}}>
            <Image 
              style={styles.image} 
              source={require("../asset/komputer/modem.png")}
            />
          </View>
        </View>

        <View style={styles.containertext}>
          <Text style={styles.baseText}>
            <Text style={{fontSize: 28, fontWeight: "bold"}}>
              Modem
              {"\n"}
            </Text>
          </Text>
          <Text style={styles.baseText}>
            <Text style={{fontSize: 18}}>
              Jumlah
            </Text>
          </Text>

          <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={styles.catagoryBtn} onPress={() => navigation.navigate('Signup')}>
              <View style={{}}>
                <Image 
                  style={styles.operationimage} 
                  source={require("../asset/plus.png")}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.input}>
              <TextInput
                style={styles.TextInput}
                placeholder="1"
                placeholderTextColor="#FFFFFF"
                //onChangeText={(email) => setEmail(email)}
              />
            </View>
            <TouchableOpacity style={styles.catagoryBtn} onPress={() => navigation.navigate('Signup')}>
              <View style={{}}>
                <Image 
                  style={styles.operationimage} 
                  source={require("../asset/minus.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containertext2}>
          <Text style={styles.baseText}>
            <Text style={{fontSize: 20}}>
              Deskripsi
            </Text>
          </Text>
          <Text style={styles.baseText}>
            <Text style={{fontSize: 16}}>
              Modem yang dijual disini adalah modem dengan kualitas terbaik, harga diatas adalah harga murah barang tidak murahan.
              {"\n"}
            </Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.confirmBtn} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.baseText}>Add to Cart</Text>
      </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
    //Container
    container: {
      flex: 1,
      backgroundColor: "#23355F",
      //paddingTop: 15,
      //paddingHorizontal: 20,
    },
    containertop: {
      backgroundColor: "#51699E",
      borderBottomWidth:1,
      borderBottomRightRadius:20,
      borderBottomLeftRadius:20
    },
    containertext: {
      backgroundColor: "#23355F",
      paddingHorizontal:20,
      paddingTop:10,
      paddingBottom:20,
      //borderBottomWidth:1,
      //borderBottomColor: 'white'
    },
    containertext2: {
      //flex: 1,
      backgroundColor: "#23355F",
      //paddingLeft:20,
      paddingTop:10,
      borderTopWidth:1,
      borderTopColor: 'white',
      marginHorizontal:20
    },
  
    //Inputbox & Button
    catagoryBtn: {
      width: "15%",
      borderRadius: 20,
      height: 30,
      marginTop: 0,
      backgroundColor: "#D5D5D5",
      borderWidth: 2,
      borderColor: "#FFFFFF",
      alignSelf:"center",
      //paddingTop:3
    },
    input: {
      backgroundColor: "#51699E",
      //marginBottom: 25,
      fontSize: 16,
      borderRadius: 8,
      paddingHorizontal: 15,
      padding: 10,
      borderWidth: 2,
      borderColor: "#FFFFFF",
      marginLeft:10,
      marginRight:10
    },
    confirmBtn: {
      width: "80%",
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 15,
      //marginBottom: 5,
      backgroundColor: "#51699E",
      borderWidth: 2,
      borderColor: "#FFFFFF",
      alignSelf: 'center'
    },

    //Image
    image: {
      width: 160,
      height: 160,
      alignSelf: 'center',
      //resizeMode: 'contain'
      marginTop:20
    },
    operationimage: {
      marginTop: 2,
      width: 20,
      height: 20,
      //marginRight:7,
      alignSelf: 'center',
      //resizeMode: 'contain', 
      //marginTop:-1,
      //marginBottom:10
    },
  
    //Text
    baseText: {
      color: 'white',
      paddingBottom: 5,
    },
    placeholderbaseText: {
      //textAlign: 'center',
      alignSelf: 'center',
      color: 'white',
      //paddingBottom: 5,
    },
    catagory: {
      fontSize: 18,
      fontWeight: '600',
      color: '#FFF',
      alignSelf: 'center',
    },
  });