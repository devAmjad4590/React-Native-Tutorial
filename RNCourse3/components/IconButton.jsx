import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

function IconButton({icon, color, onPress}) {
  return (
    <Pressable onPress={onPress} style={(({pressed}) => pressed && styles.pressed) }>
      <Ionicons name={icon} size={24} color={color}></Ionicons>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5
  }
})

export default IconButton
