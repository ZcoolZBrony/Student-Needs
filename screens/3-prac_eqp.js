import * as React from 'react';
import { useState } from 'react';
import {StyleSheet, Text,  View,  Image, TouchableOpacity} from 'react-native';
import {InputField} from '../components';

export default function Praceqp({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>            
                Practical Equipment
                {"\n"}         
                </Text>
            </Text>
            
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <TouchableOpacity style={styles.catagoryBtn} onPress={() => navigation.navigate('arduino')}>
                    <View style={{flexDirection: "row",justifyContent:"center"}}>
                        <Image 
                            style={styles.catagoryimage} 
                            source={require("./asset/praktikum/arduino.png")} 
                        />
                        <Text style={{color: '#23355F', fontWeight:"bold", paddingTop:30, fontSize:16}}>Ardiuno</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.catagoryBtn} onPress={() => navigation.navigate('breadboard')}>
                    <View style={{flexDirection: "row",justifyContent:"center"}}>
                        <Image 
                            style={styles.catagoryimage} 
                            source={require("./asset/praktikum/breadboard.png")} 
                        />
                        <Text style={{color: '#23355F', fontWeight:"bold", paddingTop:30, fontSize:16}}>Breadboard</Text>
                    </View>
                </TouchableOpacity> 
            </View>

            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <TouchableOpacity style={styles.catagoryBtn} onPress={() => navigation.navigate('induktor')}>
                    <View style={{flexDirection: "row",justifyContent:"center"}}>
                        <Image 
                            style={styles.catagoryimage} 
                            source={require("./asset/praktikum/induktor.png")} 
                        />
                       <Text style={{color: '#23355F', fontWeight:"bold", paddingTop:30, fontSize:16}}>Induktor</Text>
                    </View>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.catagoryBtn} onPress={() => navigation.navigate('kabel')}>
                    <View style={{flexDirection: "row",justifyContent:"center"}}>
                        <Image 
                            style={styles.catagoryimage} 
                            source={require("./asset/praktikum/kabel.png")} 
                        />
                        <Text style={{color: '#23355F', fontWeight:"bold", paddingTop:30, fontSize:16}}>Kabel</Text>
                    </View>
                </TouchableOpacity> 
            </View>

            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <TouchableOpacity style={styles.catagoryBtn} onPress={() => navigation.navigate('kapasitor')}>
                    <View style={{flexDirection: "row",justifyContent:"center"}}>
                        <Image 
                            style={styles.catagoryimage} 
                            source={require("./asset/praktikum/kapasitor.png")} 
                        />
                        <Text style={{color: '#23355F', fontWeight:"bold", paddingTop:30, fontSize:16}}>Kapasitor</Text>
                    </View>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.catagoryBtn} onPress={() => navigation.navigate('multimeter')}>
                    <View style={{flexDirection: "row",justifyContent:"center"}}>
                        <Image 
                            style={styles.catagoryimage} 
                            source={require("./asset/praktikum/multimeter.png")} 
                        />
                        <Text style={{color: '#23355F', fontWeight:"bold", paddingTop:30, fontSize:16}}>Multimeter</Text>
                    </View>
                </TouchableOpacity> 
            </View>

            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <TouchableOpacity style={styles.catagoryBtn} onPress={() => navigation.navigate('resistor')}>
                    <View style={{flexDirection: "row",justifyContent:"center"}}>
                        <Image 
                            style={styles.catagoryimage} 
                            source={require("./asset/praktikum/resistor.png")} 
                        />
                        <Text style={{color: '#23355F', fontWeight:"bold", paddingTop:30, fontSize:16}}>Resistor</Text>
                    </View>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.catagoryBtn} onPress={() => navigation.navigate('Praceqpothers')}>
                    <View style={{flexDirection: "row",justifyContent:"center"}}>
                        <Image 
                            style={styles.catagoryimage} 
                            source={require("./asset/praktikum/lainya.png")} 
                        />
                        <Text style={{color: '#23355F', fontWeight:"bold", paddingTop:30, fontSize:16}}>Lainnya</Text>
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
      marginTop: 10,
      marginBottom: 5,
      backgroundColor: "#51699E",
      borderWidth: 2,
      borderColor: "#FFFFFF",
      alignSelf: 'center'
    },
    catagoryBtn: {
      width: "47%",
      borderRadius: 20,
      height: 90,
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
      width: 70,
      height: 70,
      alignSelf: 'center',
      //resizeMode: 'contain'
    },
    catagoryimage: {
      marginTop: 5,
      width: 65,
      height: 65,
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