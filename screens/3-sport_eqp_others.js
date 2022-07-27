import * as React from 'react';
import { useState } from 'react';
import {StyleSheet, Text,  View,  Image, TouchableOpacity} from 'react-native';
import {InputField} from '../components';

export default function Sporteqpothers({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>            
                Lainnya
                {"\n"}         
                </Text>
            </Text>
            
            <View style={{flexDirection:"row", justifyContent:"center"}}>
                <TouchableOpacity style={styles.catagoryBtn} onPress={() => navigation.navigate('Signup')}>
                    <View style={{flexDirection: "row",justifyContent:"space-evenly", paddingTop:10}}>
                        <Image 
                            style={styles.catagoryimage} 
                            source={require("./asset/Others_sport/bet.png")} 
                        />
                        <Text style={{color: '#23355F', fontWeight:"bold", paddingTop:20, fontSize:20}}>Bet</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:"row", justifyContent:"center"}}>
                <TouchableOpacity style={styles.catagoryBtn} onPress={() => navigation.navigate('Signup')}>
                    <View style={{flexDirection: "row",justifyContent:"space-evenly", paddingTop:10}}>
                        <Image 
                            style={styles.catagoryimage} 
                            source={require("./asset/Others_sport/catur.png")} 
                        />
                      <Text style={{color: '#23355F', fontWeight:"bold", paddingTop:20, fontSize:20}}>Catur</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:"row", justifyContent:"center"}}>
                <TouchableOpacity style={styles.catagoryBtn} onPress={() => navigation.navigate('Signup')}>
                    <View style={{flexDirection: "row",justifyContent:"space-evenly", paddingTop:10}}>
                        <Image 
                            style={styles.catagoryimage} 
                            source={require("./asset/Others_sport/raket.png")} 
                        />
                      <Text style={{color: '#23355F', fontWeight:"bold", paddingTop:20, fontSize:20}}>Raket</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:"row", justifyContent:"center"}}>
                <TouchableOpacity style={styles.catagoryBtn} onPress={() => navigation.navigate('Signup')}>
                    <View style={{flexDirection: "row",justifyContent:"space-evenly", paddingTop:10}}>
                        <Image 
                            style={styles.catagoryimage} 
                            source={require("./asset/Others_sport/shuttlecock.png")} 
                        />
                      <Text style={{color: '#23355F', fontWeight:"bold", paddingTop:20, fontSize:20}}>Shuttlecock</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    //Container
    container: {
      flex: 1,
      backgroundColor: "#23355F",
      paddingTop: 15,
      paddingHorizontal: 15,
    },
  
    //Inputbox & Button
    catagoryBtn: {
      width: "90%",
      borderRadius: 20,
      height: 105,
      marginTop: 20,
      backgroundColor: "#D5D5D5",
      borderWidth: 2,
      borderColor: "#FFFFFF",
      alignSelf:"center",
      paddingTop:3
    },
    catagoryBtn2: {
      width: "47%",
      borderRadius: 20,
      height: 90,
      marginTop: 20,
      backgroundColor: "#D5D5D5",
      borderWidth: 2,
      borderColor: "#FFFFFF",
      alignSelf:"center",
      paddingTop:3,
      //marginLeft:20
    },
  
    //Image
    image: {
      marginTop: 10,
      width: 80,
      height: 70,
      alignSelf: 'center',
      //resizeMode: 'contain'
    },
    catagoryimage: {
      marginTop: 5,
      width: 80,
      height: 70,
      marginRight:7,
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
    catagory: {
      fontSize: 18,
      fontWeight: '600',
      color: '#FFF',
      alignSelf: 'center',
    },
    bsibuttonText: {
      textAlign: 'left',
      fontWeight: "bold",
      color: 'white',
      fontSize: 18,
      marginStart:10,
      //marginRight:100,
      paddingTop:15
    },
    bsibuttonTextsmall: {
      textAlign: 'left',
      fontSize: 13,
      color: 'white',
      marginStart:10,
      marginTop:-5
    },
    
  });