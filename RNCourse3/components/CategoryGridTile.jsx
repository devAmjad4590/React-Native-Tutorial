import React from 'react'
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native'

function CategoryGridTile({ title, color, onPress }) {
    return (
        <View style={[styles.gridItem]}>
            <Pressable onPress={onPress} android_ripple={{ color: '#ccc' }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}>
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 8,
        elevation: 5,

        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,

    },
    button: {
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    buttonPressed: {
        opacity: 0.5
    }
})

export default CategoryGridTile
