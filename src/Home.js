import React, {useState, useEffect} from 'react';
import {TextInput, Text, Button, Alert, View, StyleSheet,TouchableOpacity, Image} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import Setting from './Setting';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// import {Shadow} from 'react-native-shadow-2';

const Home = ({navigation}) => {
  const inputStyle = {
    borderWidth: 1,
    borderColor: '#4e4e4e',
    padding: 12,
    marginBottom: 5,
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={values => Alert.alert(JSON.stringify(values))}
      validationSchema={yup.object().shape({
        name: yup
              .string()
              .required('Please, provide your name!'),
        email: yup.string().email().required(),
        password: yup
          .string()
          .min(4)
          .max(10, 'Password should not excced 10 chars.')
          .required(),
      })}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
        
      }) => (
        <View style={styles.formContainer}>
        <TextInput
            value={values.name}
            style={inputStyle}
            onChangeText={handleChange('name')}
            onBlur={() => setFieldTouched('name')}
            // onFocus = {handleChange('name')}
            placeholder="Name"
          />
           {touched.name && errors.name && (
             <Text style={{fontSize: 12, color: '#FF0D10'}}>{errors.name}</Text>
           )}
    
          <TextInput
            value={values.email}
            style={inputStyle}
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
            placeholder="E-mail"
          />
           {touched.email && errors.email && (
             <Text style={{fontSize: 12, color: '#FF0D10'}}>{errors.email}</Text>
           )}
      
          <TextInput
            value={values.password}
            style={inputStyle}
            onChangeText={handleChange('password')}
            placeholder="Password"
            onBlur={() => setFieldTouched('password')}
            secureTextEntry={true}
          />
          {touched.password && errors.password && (
            <Text style={{fontSize: 12, color: '#FF0D10'}}>
              {errors.password}
            </Text>
          )}
          <Button
            style={{padding:20}}

            color="#3740FE"
            title="Submit"
            disabled={!isValid}
            onPress={handleSubmit}
          />
          <Button
          title="Move setting screen"
          onPress={() => navigation.navigate('Setting')}
          />
        </View>
        
      )}
    </Formik>
  );
};
export default Home;

const styles = StyleSheet.create({
  formContainer: {
    padding: 50,
  },
});
