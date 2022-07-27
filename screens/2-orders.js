import * as React from 'react';
import { useState } from 'react';
import {StyleSheet, Text,  View,  Image, TouchableOpacity} from 'react-native';
import {InputField} from '../components';

export default function Orders({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rightIcon] = useState('eye');
  
    return (
      <View style={styles.container}>
        <View style={{flexDirection:"row"}}>
          <Text style={styles.baseText}>
            <Text style={{fontSize: 25, fontWeight: "bold"}}>            
              Orders
              {"\n"}         
            </Text>
          </Text>
          <Image 
            style={{width: 40, height: 40,marginLeft:220}} 
            source={require("./asset/stationary/stationary.png")} 
          />
        </View>
        
        <InputField
          inputStyle={{fontSize: 14}}
          containerStyle={styles.input}
          color="black"
          placeholderTextColor="black"
          placeholder='Search'
          autoCapitalize='none'
          autoCorrect={false}
          rightIcon={rightIcon}
        />
        <TouchableOpacity style={styles.BSIBtn} onPress={() => navigation.navigate('Bestselling')}>
          <View style={{flexDirection: "row"}}> 
            <Text style={styles.bsibuttonText}>Best Selling Items {"\n"}</Text>
              <Image 
                style={{width: 80, height: 80, marginLeft:95, marginTop:5}} 
                source={require("./asset/BS_Items/best_selling_items.png")} 
              />
          </View>
          <View style={{marginTop:-35}}> 
            <Text style={styles.bsibuttonTextsmall}>Contains a list of items</Text>
            <Text style={styles.bsibuttonTextsmall}>frequently purchased by students</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.baseText}>
          <Text style={styles.catagory}>
            {"\n"}
            {"\n"}
            {"\n"}
            Catagory
          </Text>
        </Text>

        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <TouchableOpacity style={styles.catagoryBtn} onPress={() => navigation.navigate('statieqpmenu')}>
            <View style={{flexDirection: "row",justifyContent:"center"}}>
              <Image 
                style={styles.catagoryimage} 
                source={require("./asset/stationary/stationary.png")} 
              />
              <Text style={{color: '#23355F', fontWeight:"bold", paddingTop:30, fontSize:16}}>Stationary</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.catagoryBtn2} onPress={() => navigation.navigate('compeqp')}>
            <View style={{flexDirection: "row",justifyContent:"center"}}>
              <Image 
                style={styles.catagoryimage} 
                source={require("./asset/komputer/computer-equipment.png")} 
              />
              <View style={{flexDirection: "column", marginTop: 5}}>
                <Text style={{color: '#23355F', fontWeight:"bold", paddingTop:13, fontSize:15}}>Computer</Text>
                <Text style={{color: '#23355F', fontWeight:"bold", fontSize:15}}>Equipment</Text>
              </View>
              
            </View>
          </TouchableOpacity>
        </View>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <TouchableOpacity style={styles.catagoryBtn} onPress={() => navigation.navigate('praceqp')}>
            <View style={{flexDirection: "row",justifyContent:"center"}}>
              <Image 
                style={styles.catagoryimage} 
                source={require("./asset/praktikum/praktikum-equipment.png")} 
              />
              <View style={{flexDirection: "column", marginTop: 5}}>
                <Text style={{color: '#23355F', fontWeight:"bold", paddingTop:13, fontSize:15}}>Practical</Text>
                <Text style={{color: '#23355F', fontWeight:"bold", fontSize:15}}>Equipment</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.catagoryBtn2} onPress={() => navigation.navigate('sporteqp')}>
            <View style={{flexDirection: "row",justifyContent:"center"}}>
              <Image 
                style={styles.catagoryimage} 
                source={require("./asset/sport/sport-equipment.png")} 
              />
              <View style={{flexDirection: "column", marginTop: 5}}>
                <Text style={{color: '#23355F', fontWeight:"bold", paddingTop:13, fontSize:15}}>Sport</Text>
                <Text style={{color: '#23355F', fontWeight:"bold", fontSize:15}}>Equipment</Text>
              </View>
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