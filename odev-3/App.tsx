import { View, Text,Pressable } from 'react-native';
import React from 'react';


export default function App() {
  return <>
  <View style={{padding:20}}>

    <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{color: 'gray'}} >Friday, 15 Dec</Text>
        <Text style={{color: 'gray'}} >Search</Text>
    </View>  
  </View>
  <View style={{paddingStart:20}}>
        <View>
        <Text style={{fontSize:35,fontWeight:'bold'}} >Learn</Text>
        <Text style={{fontWeight:'bold'}} >Chose the part of the body</Text>
    </View>

    <Pressable>
      <View 
          style={{ backgroundColor: '#eb7662', borderRadius: 10, padding: 15, marginTop:30, marginEnd:20 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', paddingBottom: 5, color: '#ffffff' }}>
            Head & Face
          </Text>
          <Text style={{ color: '#ffffff' }}>11 diseases</Text>
        </View>
    </Pressable>

    <Pressable>
      <View 
          style={{ backgroundColor: '#8dc4bb', borderRadius: 10, padding: 15, marginTop:20, marginEnd:20 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', paddingBottom: 5, color: '#ffffff' }}>
            Back & Neck
          </Text>
          <Text style={{ color: '#ffffff' }}>9 diseases</Text>
        </View>
    </Pressable>

    <Pressable>
      <View 
          style={{ backgroundColor: '#f2982f', borderRadius: 10, padding: 15, marginTop:20, marginEnd:20 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', paddingBottom: 5, color: '#ffffff' }}>
            Elbow & Shoulders
          </Text>
          <Text style={{ color: '#ffffff' }}>12 diseases</Text>
        </View>
    </Pressable>

    <Pressable>
      <View 
          style={{ backgroundColor: '#327389', borderRadius: 10, padding: 15, marginTop:20, marginEnd:20 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', paddingBottom: 5, color: '#ffffff' }}>
            Hand & Arm
          </Text>
          <Text style={{ color: '#ffffff' }}>2 diseases</Text>
        </View>
    </Pressable>

  </View>
    </>;
}