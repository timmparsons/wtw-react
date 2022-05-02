import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const HeaderTabs = () => {
  const [ activeTab, setActiveTab ] = useState('Movies');
  return (
    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
      <HeaderButton
        text={'Movies'}
        buttonColor={'black'}
        textColor={'white'}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text={'Popular'}
        buttonColor={'white'}
        textColor={'black'}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  )
}

const HeaderButton = (props) => (
  <TouchableOpacity style={{
    backgroundColor: props.activeTab === props.text ? 'black' : 'white',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30
  }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text style={{
      color: props.activeTab === props.text ? 'white' : 'black',
      fontSize: 15,
      fontWeight: '900'
    }}>{props.text}</Text>
  </TouchableOpacity >
)

export default HeaderTabs;
