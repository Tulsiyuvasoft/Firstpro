import React, { useState, useEffect } from 'react';
import { View, Text ,TextInput, SafeAreaView, StyleSheet, Button, TouchableOpacity } from 'react-native';
import axios from "axios";

const Profile = () =>{    

    const [setSecureEntry,isSetSecureEntry] = useState(true);
    const baseURL = "https://jsonplaceholder.typicode.com/posts";
    const [post,setPost] = useState([]);
    const [item, setItem] = useState(true)

    useEffect(() => {
    //     fetch('https://reqres.in/api/users?page=2')
    //    .then((response)=>response.json())
    //    .then((json)=>setPost(json))
    //    .catch((error)=>console.log(error))
    //    .finally(()=>setLoading(false))
  axios.get('https://reqres.in/api/users?page=2')
  .then((response)=>setPost(response.data));
     
}, []);
function createPost() {
    axios
      .post(baseURL, {
        id:'5',
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if(!post) return "NO POST"
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text>{post.total}</Text>
                <Text>{post.id}</Text>
                <Text>{post.title}</Text>
                <Text>{post.body}</Text>
            <Button 
             title="click me"
             onClick={createPost}
            />
         <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',borderColor:'black',borderWidth:1,padding:10,borderRadius:50}}>
          <View style={{width:'60%'}}>  
          <TextInput
            placeholder='password'
            secureTextEntry = {item}
            />
            </View>
            <View style={{}}>
            <TouchableOpacity onPress={()=>setItem(!item)}>
              <Text>{item?'Show':'Hide'}</Text>
            </TouchableOpacity>
            </View>
          </View>
           </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{flex:1},
})

export default Profile;
