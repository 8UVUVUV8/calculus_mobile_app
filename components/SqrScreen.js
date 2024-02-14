import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function SqrScreen() {
    const [side, setSide] = useState(0)
    const [area, setArea] = useState('terület')
    function calcArea(){
      let res = Math.pow(side,2)
      setArea(res)
      setSide(0)
    }

    return (
        <View style={styles.container}>

        <Image 
            source={require('../assets/square.png')}
            style={{width: 100, height: 100 }}
        />

          <Text style={styles.h1}>Négyzet</Text>
    
          <View style={styles.inputs}>
            <Text style={styles.sideText}>oldal</Text>
            <TextInput 
            style={styles.Input} 
            onChangeText={num => {setSide(num)}}
            />
          </View>
    
          <Pressable style={styles.pressable} onPress={calcArea}>
            <Text>Számit</Text>
          </Pressable>
    
          <TextInput
            style={[styles.Input,styles.resInput]}
            value={area}
          />
    
          <StatusBar style="auto" />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
      },
      h1:{
        fontSize: 60,
      },
      sideText:{
        borderTopEndRadius: 6,
        borderTopLeftRadius: 6,
        borderWidth: 2,
        padding: 5,
        paddingTop: 3,
        marginBottom: -2,
        textAlign: 'center',
        marginTop: 20,
        backgroundColor: 'white'
      },
      Input:{
        borderRadius: 6,
        borderWidth: 2,
        marginTop: 0,
        textAlign: 'center',
        backgroundColor: 'white'
    
      },
      inputs:{
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
      pressable:{
        backgroundColor: 'lightgreen',
        padding: 10,
        borderRadius: 6,
        margin: 20,
        borderWidth: 2,
      },
      resInput:{
        width: 50,
        height: 50,
      }
    });
  //SqrScreen