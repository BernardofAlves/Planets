import React from 'react'
import { View, StyleSheet, Text, Image, TouchableWithoutFeedback } from 'react-native'

export default props => {
    return (
        <TouchableWithoutFeedback 
            disabled={props.name === 'terra' ? true : false }
            onPress={props.onClick}
            
        >   
            <View style={styles.card}>
                <Image style={styles.img} source={props.imgSrc}/>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.peso}>Força G:{props.gravity}</Text>
            </View>

        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        borderColor: '#4f4f4f',
        backgroundColor: '#ff4500',
        borderRadius: 20,
        borderWidth: 3,
        height: 170,
        width: 110,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 5,
    },
    img: {
        marginTop: 10,
        height: 80,
        width: 80,
    },
    name: {
        fontSize: 22,
        fontWeight: '700',
        color: '#fff',
    },
    peso: {
        fontSize: 14,
        fontWeight: '500',
        color: '#363636',
        marginBottom: 10,
    },
})