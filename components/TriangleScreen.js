import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function TriangleScreen() {
    const [base, setBase] = useState(0)
    const [heig, setHeig] = useState(0)
    const [area, setArea] = useState('terület')
    function calcArea(){
      let res = base*heig / 2
      setArea(res)
      setBase(0)
      setHeig(0)
    }

    return (
        <View style={styles.container}>

        <Image 
            source={require('../assets/triangle.png')}
            style={{width: 140, height: 140 }}
        />

          <Text style={styles.h1}>Háromszög</Text>
    
          <View style={styles.inputs}>
            <Text style={styles.baseText}>Alap</Text>
            <TextInput 
            style={styles.Input} 
            onChangeText={num => {setBase(num)}}
            />
            <Text style={styles.heightText}>Magasság</Text>
            <TextInput 
            style={styles.Input} 
            onChangeText={num => {setHeig(num)}}
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
      baseText:{
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
      heightText:{
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
        backgroundColor: 'lightblue',
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