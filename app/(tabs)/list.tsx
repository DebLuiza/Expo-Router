import { View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const ListPage = () => {
  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10}}>
      <Link href={"/list/1"}>News One</Link>
      <Link href={"/list/2"}>News Two</Link>
      <Link href={"/list/3"}>News Three</Link>
    </View>
  )
}

export default ListPage