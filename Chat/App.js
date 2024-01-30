import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import dangky from './Screen/Signup';
import phone from './Screen/Phone';

// màn hình đăng nhập
function login({navigation}){
  return(
    <View style={styles.container}>

        <View><Text style={{fontSize:100,top:-100,color:'#0099FF'}}>NVV</Text></View>
        <TouchableOpacity style={styles.login}>
          <View><Text style={{ fontSize : 20,color : 'white',}}>Đăng nhập</Text></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('dangky')} style={styles.signup}>
          <View><Text style={{ fontSize : 20}}>Đăng ký</Text></View>
        </TouchableOpacity>



    </View>

  )
}

// function dangky(){
//   return(
//     <View><Text>xin chao</Text></View>
//   )
// }
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}} name='login' component={login}/>
          <Stack.Screen  options={{headerTitle:'Tạo Tài Khoản',headerTitleAlign:'center',headerStyle:{backgroundColor:'#0099FF'}}} name='dangky' component={dangky}/>
          <Stack.Screen  options={{headerTitle:'Tạo Tài Khoản',headerTitleAlign:'center',headerStyle:{backgroundColor:'#0099FF'}}} name='phone' component={phone}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login:{
    borderWidth:1,
    borderColor: 'black',
    width : '90%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    backgroundColor : '#0099FF',
   
    height : 50,
    bottom : -140,
  },
  signup:{
   
    borderWidth:1,
    borderColor: 'black',
    width : '90%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    // backgroundColor : '#0099FF',
    bottom : -155,
    height : 50

  }
});
