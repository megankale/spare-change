//import libraries for making a Component
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// make a Component
const Header = (props) => {
    const { textStyle, viewStyle, nextButtonStyle, backButtonStyle, titleStyle } = styles;
  return (
    <View style={viewStyle}>

    <TouchableOpacity style={backButtonStyle} onPress={props.back}>
    <Text style={textStyle}> back </Text>
    </TouchableOpacity>

      <Text style={titleStyle}>{props.headerText}</Text>

      <TouchableOpacity style={nextButtonStyle} onPress={props.next}>
      <Text style={textStyle}> next </Text>
      </TouchableOpacity>

    </View>
  );
};


//styling
const styles = {
viewStyle: {
  backgroundColor: '#8A2BE2',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  height: 60,
  paddingTop: 15,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 7 },
  shadowOpacity: 0.9,
  elevation: 2
},

textStyle: {
  fontSize: 18
},

titleStyle: {
  fontSize: 20,
  fontWeight: 'bold'
},

nextButtonStyle: {
  left: 90
},

backButtonStyle: {
  right: 90
}
};

//I make the Components available to other parts of the application
export default Header;
