import * as React from 'react';
import { useState } from 'react';
import {StyleSheet, Text,  View,  Image, TouchableOpacity} from 'react-native';
import {InputField} from '../components';

export default function bestselling({ navigation }) {
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    //const [rightIcon] = useState('eye');
  
    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>
          <Text style={{fontSize: 24, fontWeight: "bold"}}>
            Best Selling Items
            {"\n"}
          </Text>
        </Text>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <View style={{borderColor: "#51699E", borderWidth:1, width:160, height:190, paddingLeft:10, borderRadius: 20}}>
            <Image 
              style={styles.catagoryimage} 
              source={require("./asset/BS_Items/ball.png")}
            />
            <View style={{alignSelf:"center"}}>
              <Text style={styles.baseText}>
                <Text style={{fontSize: 20, justifyContent:"center"}}>
                  Ball
                  {"\n"}
                </Text>
              </Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
              <Text style={styles.baseText}>
                <Text style={{fontSize: 16}}>
                    Rp1.000
                </Text>
              </Text>
              <View style={{paddingRight:10}}>
                <TouchableOpacity style={{alignSelf:'flex-end', backgroundColor:"white", borderRadius: 10, }} onPress={() => navigation.navigate('sporteqp')}>
                  <Image 
                    style={styles.image} 
                    source={require("./asset/plus.png")} 
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{borderColor: "#51699E", borderWidth:1, width:160, height:190, paddingLeft:10, borderRadius: 20}}>
            <Image 
              style={styles.catagoryimage} 
              source={require("./asset/BS_Items/barbel.png")} 
            />
            <View style={{alignSelf:"center"}}>
              <Text style={styles.baseText}>
                <Text style={{fontSize: 20, justifyContent:"center"}}>
                  Barbel
                  {"\n"}
                </Text>
              </Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
              <Text style={styles.baseText}>
                <Text style={{fontSize: 16}}>
                    Rp34.500
                </Text>
              </Text>
              <View style={{paddingRight:10}}>
                <TouchableOpacity style={{alignSelf:'flex-end', backgroundColor:"white", borderRadius: 10, }} onPress={() => navigation.navigate('sporteqp')}>
                  <Image 
                    style={styles.image} 
                    source={require("./asset/plus.png")} 
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
          
        <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:30}}>
          <View style={{borderColor: "#51699E", borderWidth:1, width:160, height:190, paddingLeft:10, borderRadius: 20}}>
            <Image 
              style={styles.catagoryimage} 
              source={require("./asset/BS_Items/resistor-removebg-preview.png")} 
            />
            <View style={{alignSelf:"center"}}>
              <Text style={styles.baseText}>
                <Text style={{fontSize: 20, justifyContent:"center"}}>
                  Resistor
                  {"\n"}
                </Text>
              </Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
              <Text style={styles.baseText}>
                <Text style={{fontSize: 16}}>
                    Rp5.000
                </Text>
              </Text>
              <View style={{paddingRight:10}}>
                <TouchableOpacity style={{alignSelf:'flex-end', backgroundColor:"white", borderRadius: 10, }} onPress={() => navigation.navigate('sporteqp')}>
                  <Image 
                    style={styles.image} 
                    source={require("./asset/plus.png")} 
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{borderColor: "#51699E", borderWidth:1, width:160, height:190, paddingLeft:10, borderRadius: 20}}>
            <Image 
              style={styles.catagoryimage} 
              source={require("./asset/BS_Items/headset_gaming-removebg-preview.png")} 
            />
            <View style={{alignSelf:"center"}}>
              <Text style={styles.baseText}>
                <Text style={{fontSize: 20, justifyContent:"center"}}>
                  Headset
                  {"\n"}
                </Text>
              </Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
              <Text style={styles.baseText}>
                <Text style={{fontSize: 16}}>
                    Rp250.000
                </Text>
              </Text>
              <View style={{paddingRight:10}}>
                <TouchableOpacity style={{alignSelf:'flex-end', backgroundColor:"white", borderRadius: 10, }} onPress={() => navigation.navigate('sporteqp')}>
                  <Image 
                    style={styles.image} 
                    source={require("./asset/plus.png")} 
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
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
      paddingHorizontal: 20,
    },
  
    //Inputbox & Button
  
    //Image
    image: {
      borderRadius: 20,
      width: 30,
      height: 30,
      alignSelf: 'center',
      //resizeMode: 'contain'
    },
    catagoryimage: {
      marginTop: 5,
      width: 65,
      height: 65,
      marginRight:7,
      alignSelf: 'center',
      //resizeMode: 'contain', 
      marginTop:15,
      marginBottom:10
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
  });