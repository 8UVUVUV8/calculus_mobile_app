import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function CircleScreen() {
    const [beam, setBeam] = useState(0)
    const [area, setArea] = useState('terület')
    function calcArea(){
      let res = Math.pow(beam,2)*Math.PI
      setArea(res)
      setBeam(0)
    }

    return (
        <View style={styles.container}>

        <Image 
            source={require('../assets/circle.png')}
            style={{width: 140, height: 140 }}
        />

          <Text style={styles.h1}>Kör</Text>
    
          <View style={styles.inputs}>
            <Text style={styles.beamText}>Sugár</Text>
            <TextInput 
            style={styles.Input} 
            onChangeText={num => {setBeam(num)}}
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
      beamText:{
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
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 6,
        margin: 20,
        borderWidth: 2,
      },
      resInput:{
        width: 80,
        height: 50,
      }
    });

  //CircleScreen