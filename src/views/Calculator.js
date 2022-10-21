import { Button, Icon } from '@rneui/base'
import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, TextInput, } from 'react-native'


export default props => {
    const params = props.route.params
    const [weightValue, setWeightValue] = useState(0)

    function calculaG() {
        let calc = ((params.gravity * Number(weightValue)) / 9.7).toFixed(2) // 9.7 = Earth G
        return isNaN(calc) ? '0.00' : calc
    }

    return (
        <>
                <View style={{ backgroundColor: '#FF4500', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button
                    icon={ <Icon name='arrow-left' size={30} color='#fff'/>}
                    type='clear'
                    onPress={() => props.navigation.goBack()}
                    />                    
                    <Button
                    icon={ <Icon name='home' size={30} color='#fff'/>}
                    type='clear'
                    onPress={() => props.navigation.navigate('Home')}
                    />                   
                </View>
                <View style={styles.container}>
                    <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: '600', color: '#000000', marginBottom: 15 }}>{params.name} </Text>
                    <Image source={params.imgSrc} style={{  height: 84, width: 84, alignContent: 'center', alignItems: 'center', justifyContent: 'center', }}/>
                        <View style={styles.input}>
                            <Text style={styles.textInput}>Seu peso na Terra:</Text>
                            <TextInput
                                placeholder="Seu peso em Kg"
                                onChangeText={setWeightValue}
                                keyboardType="numeric"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.textInput}>Seu peso em {params.name}:</Text>
                            <TextInput
                                keyboardType="numeric"
                                underlineColorAndroid="transparent"
                                value={`${calculaG()}`}
                                editable={false}
                            />
                        </View >               
                </View >
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#dcdcdc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '65%',
        flexDirection: 'row',
        marginLeft: 35,
        alignItems: 'center',        
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginTop: 20,
        borderRadius: 20,
        paddingLeft: 15,
    },
    textInput: {
        paddingHorizontal: 10,
        color: '#000000',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
});