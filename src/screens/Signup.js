import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {AuthContext} from '../context/Authcontext';

// const image= {uri: 'https://reactjs.org/logo-og.png'}
const Separator = () => <View style={styles.separator} />;

const Signup = ({navigation}) => {
  //const navigation = useNavigation();

  const {Signup} = useContext(AuthContext);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setrePassword] = useState('');

  // const signupHandler=()=>{
  //     if(password === repassword){
  //         Signup(fullname,email,password,repassword)
  //         if (fullname !="" && email !="" && password !="" && repassword !="") {
  //             navigation.pop()
  //         }

  // {
  // // navigation.pop()
  // }
  //     }

  const signupHandler = () => {
    var rule = /^[a-zA-Z ]*$/;
    if (!fullname || !rule.test(fullname)) {
      Alert.alert('fullname invalid');
    } else if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      Alert.alert('email invalid');
    } else if (!password || password.length <= 8) {
      Alert.alert('enter the valid password');
    } else if (repassword !== password) {
      Alert.alert('Password did not match');
    }
    // else {Alert.alert("successfull")}
    navigation.pop();
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.pop()}
        style={{backgroundColor: 'grey', padding: 10}}>
        <Text>Back</Text>
      </TouchableOpacity>

      <View style={{flex: 1, justifyContent: 'center', padding:20,margin: 10}}>
        {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
        {/* <Button title="LOGIN"/>
        <Separator />
        <Button title="SIGNUP" color="#f194ff"/> */}
        {/* <Text style={{textAlign:"center", color:"white", fontSize:20}}>Application Name</Text> */}
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../assests/registration.jpg')}
            style={{height: 300, width: 300}}
          />
        </View>
        <Separator />
        <TextInput
          placeholder="Enter your full name"
          value={fullname}
          onChangeText={value => setFullname(value)}
          style={{
            color: 'black',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 20
          }}
        />
        <Separator />
        <TextInput
          placeholder="Enter your email address"
          value={email}
          onChangeText={value => setEmail(value)}
          style={{
            color: 'black',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 20,
          }}
        />
        {/* <TextInput placeholder="Enter your email address" onChangeText={(text) => this.validate(text)} value={this.state.email} style={{ color: "black", borderColor: "black", borderWidth: 1, borderRadius: 20, padding: 10, margin: 10 }} /> */}

        <Separator />
        <TextInput
          placeholder="type your password"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
          style={{
            color: 'black',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 20
          }}
        />
        <Separator />
        <TextInput
          placeholder="Re-type your password"
          value={repassword}
          onChangeText={value => setrePassword(value)}
          secureTextEntry={true}
          style={{
            color: 'black',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 20,
          }}
        />

        <Separator />
        <View style={{width: '90%', paddingVertical:20, marginLeft: 20}}>
          <TouchableOpacity onPress={signupHandler}>
            <Text
              style={{
                backgroundColor: '#ae40b1',
                paddingVertical: 20,
                textAlign: 'center',
                color: 'white',
                fontSize: 15,
                borderRadius: 5,
              }}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  separator: {
    marginVertical: 10
  },
});
export default Signup;
