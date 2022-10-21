import { Button, Icon } from '@rneui/base'
import React from 'react'
import { ScrollView, Text, StyleSheet, View, TextInput } from 'react-native'
import Card from '../components/Card'
import Planets from '../data/planets'


export default props => {

    return (
        <ScrollView>
            <View style={{ backgroundColor: '#ff4500', flexDirection: 'row', justifyContent: 'flex-end' }}>                  
                    <Button
                    icon={ <Icon name='home' size={30} color='#fff'/>}
                    type='clear'
                    onPress={() => props.navigation.navigate('Home')}
                    />                   
                </View>
            <View style={styles.container}>
                <Text style={styles.title}>Selecione um planeta</Text>
            <View style={styles.cardsContainer}>
                {
                    Planets.map((Planets) => {
                        return <Card 
                            {...Planets}
                            key={Planets.name}
                            onClick={() => props.navigation.navigate('Calculator', Planets)}
                        />
                    }
                    )
                }
            </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: '600',
      color: '#363636',
      marginBottom: 20,
    },
    container: {
      flex: 1,
      backgroundColor: '#dcdcdc',
      paddingTop: 20,
      alignItems: 'center'
    },
    cardsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
  });