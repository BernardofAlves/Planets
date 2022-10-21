import React from 'react'
import { Text, View, TouchableWithoutFeedback, StyleSheet } from 'react-native'


export default props => {

    return (

            <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Display') }>
                <View style={styles.screen}>
                    <Text style={styles.title}>Planets</Text>
                        <Text style={styles.text}>Você já parou para pensar qual seria o seu peso em outros planetas do sistema solar?</Text>
                        <Text style={[styles.text, {color: '#808080'}]}>Descubra agora!</Text>
                        <Text style={styles.next}>Toque para avançar e descobrir</Text>
                </View>
            </TouchableWithoutFeedback>
       
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#dcdcdc',
        paddingTop: 130,
    },
    title:{
        paddingLeft: 20,
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Quicksand',
        color: '#363636',
    },
    text: {
        padding: 20,
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Quicksand',
        color: '#808080',
    },
    next: {
        paddingLeft: 25,
        textAlign: 'right',
        paddingTop: 180,
        paddingRight: 25,
        fontSize: 21,
        fontWeight: 'bold',
        fontFamily: 'Quicksand',
        color: '#ff8c00'
    },
})