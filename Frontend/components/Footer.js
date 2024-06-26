import { View, Text} from 'react-native'
import React from 'react'
import Button from './Button';

const COLORS = {
    like: "#00eda6",
    nope: "#ff006f",
}
const Footer = ({handleChoice}) => {
  return (
    <View style={{
        position: "absolute", 
        bottom: 60,
        width:240,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: -999,
        }}>
        <Button name="times" size={24} color={COLORS.nope} onPress={()=>handleChoice(-1)}/>
        <Button name="heart" size={24} color={COLORS.like} onPress={()=> handleChoice(1)} />
    </View>
  )
}

export default Footer