import { View, Text, SafeAreaView, StyleSheet,Image } from 'react-native'
import React from 'react'
import CUSTOM_COLOR from '../.././constants/colors.js';
import { createNavigationContainerRef } from '@react-navigation/native'
import { settingicon, messenger,notification } from '../../assets/icons/index.js';
function OverView () {
  return (
    <SafeAreaView style = {{flexDirection: 'column'}}>
    <View style = {{width: '100%',height: '20%', flexDirection: 'row'}}>
      <Image 
      source={settingicon}
      style = {styles.settingicon}>
      </Image>
      <Image
      source={messenger}
      style= {styles.messengericon}
      >
      </Image>
      <Image source={notification} style = {styles.notificationicon} >
      </Image>
    </View>
    <View style = {{width:'100%',height:'3%',backgroundColor: CUSTOM_COLOR.Sliver}}>
    </View>
    <View style = {{width: '100%',height: '20%'}}>

    </View>
    <View style = {{width:'100%',height:'3%',backgroundColor: CUSTOM_COLOR.Sliver}}>
    </View>
    <View>

    </View>
    <View style = {{width: '100%',height: '20%'}}>

    </View>
    <View style = {{width:'100%',height:'3%',backgroundColor: CUSTOM_COLOR.Sliver}}>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    settingicon:{
        width: '7%',
        height: '46%',
        marginLeft: '65%',
        marginTop: '12%',
    },
    messengericon:{
      width: '7%',
      height: '31%',
      marginTop: '12%',
      marginLeft: '6%'
    },
    notificationicon:{
      width: '7%',
      height: '33%',
      marginTop: '12%',
      marginLeft: '5%'
    }
})

export default OverView