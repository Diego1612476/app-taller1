import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen({navigation} : any) {
  return (
    <ImageBackground
        source={{uri: 'https://4kwallpapers.com/images/walls/thumbs_3t/9528.png'}}
        style = {styles.container}
    >
        
        
        <Text style={styles.texts}>BIENVENIDO</Text>
        <Text style={styles.textss}>"Nombre MINIJUEGO"</Text>


        <TouchableOpacity
        style={styles.boton}
        onPress={() => navigation.navigate('Bottom')}
      >
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>


        

    </ImageBackground>
          
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    texts:{
        top: 10,
        color: 'white',
        position: 'absolute',
        fontSize: 30,
        fontWeight: 'bold'

    },
    textss:{
        top: 100,
        color: 'white',
        position: 'absolute',
        fontSize: 30,
        fontWeight: 'bold'
    },
    boton:{
        position:'absolute',
        paddingBottom: 40,
        backgroundColor: '#6627d3',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
   
    },
    buttonText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})