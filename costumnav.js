import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Mainmenu from "./screens/2-mainmenu";
import Chat from "./screens/Chat";
import Orders from "./screens/2-orders";
import History from "./screens/2-history";
import Stationary from "./screens/3-stati_eqp";
import Compeqp from "./screens/3-comp_eqp";
import Praceqp from "./screens/3-prac_eqp";
import Sporteqp from "./screens/3-sport_eqp";
import Compeqpothers from "./screens/3-comp_eqp_others";
import Praceqpothers from "./screens/3-prac_eqp_others";
import Sporteqpothers from "./screens/3-sport_eqp_others";
import Stationaryothers from "./screens/3-stati_eqp_others";
import Bestselling from "./screens/3-bs_items";

import kertas_hvs from "./screens/4-page/4_1-kertas_hvs";
import kertas_polio from "./screens/4-page/4_1-kertas_polio";
import paper_klip from "./screens/4-page/4_1-paper-klip";
import penggaris from "./screens/4-page/4_1-penggaris";
import penghapus from "./screens/4-page/4_1-penghapus";
import pensil from "./screens/4-page/4_1-pensil";
import pulpen from "./screens/4-page/4_1-pulpen";

import cleaningkit from "./screens/4-page/4_2-cleaning-kit";
import flashdisk from "./screens/4-page/4_2-flashdisk";
import headset from "./screens/4-page/4_2-headset";
import keyboard from "./screens/4-page/4_2-keyboard";
import modem from "./screens/4-page/4_2-modem";
import mouse from "./screens/4-page/4_2-mouse";
import mousepad from "./screens/4-page/4_2-mousepad";

import arduino from "./screens/4-page/4_3-arduino";
import breadboard from "./screens/4-page/4_3-breadboard";
import induktor from "./screens/4-page/4_3-induktor";
import kabel from "./screens/4-page/4_3-kabel";
import kapasitor from "./screens/4-page/4_3-kapasitor";
import multimeter from "./screens/4-page/4_3-multimeter";
import resistor from "./screens/4-page/4_3-resistor";

import Ball from "./screens/4-page/4_4-ball";
import barbel from "./screens/4-page/4_4-barbel";
import gloves from "./screens/4-page/4_4-gloves";
import matres from "./screens/4-page/4_4-matres";
import shoes from "./screens/4-page/4_4-shoes";
import skiping from "./screens/4-page/4_4-skiping";
import Sock from "./screens/4-page/4_4-sock";


const Stack = createStackNavigator();

const FirstScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{title: '',headerStyle: {backgroundColor: '#23355F'}, headerTintColor:'#fff'}}>
       <Stack.Screen
        name="Mainmenu"
        component={Mainmenu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ordersmenu"
        component={Orders}
        options={{}}
      />
      <Stack.Screen
        name="historysmenu"
        component={History}
        options={{}}
      />
      <Stack.Screen
        name="statieqpmenu"
        component={Stationary}
        options={{}}
      />
      <Stack.Screen
        name="compeqp"
        component={Compeqp}
        options={{}}
      />
      <Stack.Screen
        name="praceqp"
        component={Praceqp}
        options={{}}
      />
      <Stack.Screen
        name="sporteqp"
        component={Sporteqp}
        options={{}}
      />
      <Stack.Screen
        name="Compeqpothers"
        component={Compeqpothers}
        options={{}}
      />
      <Stack.Screen
        name="Praceqpothers"
        component={Praceqpothers}
        options={{}}
      />
      <Stack.Screen
        name="Sporteqpothers"
        component={Sporteqpothers}
        options={{}}
      />
      <Stack.Screen
        name="Stationaryothers"
        component={Stationaryothers}
        options={{}}
      />
      <Stack.Screen
        name="Bestselling"
        component={Bestselling}
        options={{}}
      />

      <Stack.Screen
        name="kertas_hvs"
        component={kertas_hvs}
        options={{}}
      />
      <Stack.Screen
        name="kertas_polio"
        component={kertas_polio}
        options={{}}
      />
      <Stack.Screen
        name="paper_klip"
        component={paper_klip}
        options={{}}
      />
      <Stack.Screen
        name="penggaris"
        component={penggaris}
        options={{}}
      />
      <Stack.Screen
        name="penghapus"
        component={penghapus}
        options={{}}
      />
      <Stack.Screen
        name="pensil"
        component={pensil}
        options={{}}
      />
      <Stack.Screen
        name="pulpen"
        component={pulpen}
        options={{}}
      />
      
      <Stack.Screen
        name="cleaningkit"
        component={cleaningkit}
        options={{}}
      />
      <Stack.Screen
        name="flashdisk"
        component={flashdisk}
        options={{}}
      />
      <Stack.Screen
        name="headset"
        component={headset}
        options={{}}
      />
      <Stack.Screen
        name="keyboard"
        component={keyboard}
        options={{}}
      />
      <Stack.Screen
        name="modem"
        component={modem}
        options={{}}
      />
      <Stack.Screen
        name="mouse"
        component={mouse}
        options={{}}
      />
      <Stack.Screen
        name="mousepad"
        component={mousepad}
        options={{}}
      />

      <Stack.Screen
        name="arduino"
        component={arduino}
        options={{}}
      />
      <Stack.Screen
        name="breadboard"
        component={breadboard}
        options={{}}
      />
      <Stack.Screen
        name="induktor"
        component={induktor}
        options={{}}
      />
      <Stack.Screen
        name="kabel"
        component={kabel}
        options={{}}
      />
      <Stack.Screen
        name="kapasitor"
        component={kapasitor}
        options={{}}
      />
      <Stack.Screen
        name="multimeter"
        component={multimeter}
        options={{}}
      />
      <Stack.Screen
        name="resistor"
        component={resistor}
        options={{}}
      />

      <Stack.Screen
        name="Ball"
        component={Ball}
        options={{}}
      />
      <Stack.Screen
        name="barbel"
        component={barbel}
        options={{}}
      />
      <Stack.Screen
        name="gloves"
        component={gloves}
        options={{}}
      />
      <Stack.Screen
        name="matres"
        component={matres}
        options={{}}
      />
      <Stack.Screen
        name="shoes"
        component={shoes}
        options={{}}
      />
      <Stack.Screen
        name="skiping"
        component={skiping}
        options={{}}
      />
      <Stack.Screen
        name="Sock"
        component={Sock}
        options={{}}
      />
      </Stack.Navigator>
  );
}

export {FirstScreenNavigator};

const SecondScreenNavigator = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen
        name="Chat"
        component={Chat}
        />
      </Stack.Navigator>
    );
  }
  
  export {SecondScreenNavigator};

  const ThirdScreenNavigator = () => {
    return (
      <Stack.Navigator >
          <Stack.Screen
            name="Setting"
            component={Mainmenu}
            options={{headerShown: false}}
          />
      </Stack.Navigator>
    );
  }
  
  export {ThirdScreenNavigator};