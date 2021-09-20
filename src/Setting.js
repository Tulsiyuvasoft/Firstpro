import { getValues } from 'jest-validate/build/condition';
import React, { useState, useEffect} from 'react';
import { View,TouchableOpacity ,Text, SafeAreaView, StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import * as yup from 'yup';
import {Formik} from 'formik';
import Home from './Home';

const Setting = ({navigation}) =>{
 
    const [ password, setPassword ] = useState(true);
    const[ name, setName ] = useState(true);
    const [setSecureEntry,isSetSecureEntry] = useState(false); 
     
    return (
    <SafeAreaView style={styles.container}>
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
    <KeyboardAvoidingView
     behavior={Platform.OS === "ios" ? "padding" : "height"}
     style={styles.container}
     >
    <View style={[styles.container,{marginTop:50}]}>
        <View>
          <Text style={{marginLeft:50}}>Username...</Text>
        </View>
        <View  style={styles.userStyle}>
        <TextInput
        // value={name}
        placeholder='name'
        secureTextEntry={false} 
        onChangeText={(name)=>setName(name)}
        defaultValue={name}
        style={[styles.inputStyle]}
        />
        {!name?
          <View style={{marginRight:100}}>
          <Text style={{color:'red'}}>username is required</Text>
        </View>
            :
           <></>
        }
       
        </View>
        <View>
          <Text style={{marginLeft:50,marginTop:10,marginBottom:15}}>Password...</Text>
        </View>
        <View style={styles.userStyle}>
        <View style={{width:'80%',flexDirection:'row',borderColor:'black',borderWidth:1,padding:20,borderRadius:50}}>
        <View style={{width:'80%'}}>
        <TextInput
        value={password}
        placeholder='password'
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={setSecureEntry}
        // style={styles.inputStyle}
        />
        </View>
          <TouchableOpacity onPress={()=>isSetSecureEntry(!setSecureEntry)}>
            <Text>{setSecureEntry?"Show":"Hide"}</Text>
          </TouchableOpacity>
        </View>
        {!password?
        <View style={{marginRight:100}}>
            <Text style={{color:'red'}}>Password is required</Text>
        </View>
        :
        <>
        </>
        }
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate(Home)}>
            <View style={{marginTop:10,alignSelf:'center',width:'40%',padding:15,backgroundColor:'grey',borderRadius:50,alignItems:'center'}}>
                <Text style={{color:'white',fontSize:16}}>Sign_In</Text>
            </View>
        </TouchableOpacity>
       </View>

      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
     </SafeAreaView>
     );
  }

const styles = StyleSheet.create({
    container:{flex:1},
    userStyle:{justifyContent: 'center',alignItems:'center'},
    inputStyle:{borderWidth:1,borderColor:'black',padding:20,width:'80%',marginTop:15,borderRadius:50}

    
})

export default Setting;

