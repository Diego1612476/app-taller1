import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function LoginScreen(navigation : any) {

    const [usuario, setusuario] = useState('')
    const [clave, setclave] = useState('')



  return (
   <ImageBackground
           source={{uri: 'https://4kwallpapers.com/images/walls/thumbs_3t/20151.jpg'}}
           style = {styles.container}
       >
           
           
           <Text style={styles.texts}>Iniciar sesion</Text>
           <Text style={styles.textss}>Usuario</Text>
           <TextInput
        placeholder='Ingresar Usuario'
        style = {styles.input}
        onChangeText={(texto) => setusuario(texto)}
      />
           <Text style={styles.textsss}>Clave</Text>
           <TextInput
        placeholder='Ingresar Clave'
        style = {styles.input2}
        onChangeText={(texto) => setclave(texto)}
      />
   
   
           <TouchableOpacity
           style={styles.boton}
           onPress={() => navigation.navigate('Bottom')}
         >
           <Text style={styles.buttonText}>Iniciar</Text>
         </TouchableOpacity>
   
   
           
   
       </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
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
    textsss:{
        top: 200,
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
    },
    input:{
        position:'absolute',
        top: 135,
        height: 50,
        padding:10,
        fontSize: 30,
        backgroundColor: '#fcfcfd',
        margin: 10,
        borderRadius: 10,
        paddingHorizontal: 20
    },
    input2:{
        position:'absolute',
        top: 240,
        height: 50,
        padding:10,
        fontSize: 30,
        backgroundColor: '#fcfcfd',
        margin: 10,
        borderRadius: 10,
        paddingHorizontal: 20
    }
})