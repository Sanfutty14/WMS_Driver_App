import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import { wH, wW } from '../../styles/globalStyle';
const MapRoute = () => {
  return (
    <View style={{height:wH,width:wW}}>
     <MapView style={StyleSheet.absoluteFill}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  /></View>
  )
}

export default MapRoute

const styles = StyleSheet.create({})