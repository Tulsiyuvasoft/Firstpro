import { NavigationContainerRefContext } from '@react-navigation/core';
import { DefaultTransition } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet,Animated,Easing } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Splash = ({navigation}) => {
    
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('Setting');
           }, 2000);
    })
    
return (
    <View style={styles.container}>
      <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
        <Text style={{color:'orange',fontSize:18,fontWeight:'bold'}}>Hello Moto!</Text>
        <Icon name="gear" size={85} color={'orange'}/>
      </View>
    </View>
    );
  
}

const styles = StyleSheet.create({
    container:{flex:1},
})
export default Splash;
