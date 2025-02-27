import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Colors from '../constants/colors'

function Card({children}) {
  return (
    <View style={styles.inputContainer}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center', //vertically center
        alignItems: 'center', // horizontally center
        padding: 16,
        marginTop: 26,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, // android only property for shadow
        shadowColor: 'black', // ios only property for shadow
        shadowOffset: { width: 0, height: 2 }, // ios only property for shadow
        shadowRadius: 6, // ios only property for shadow
        shadowOpacity: 0.26, // ios only property for shadow
    },
    })

export default Card
