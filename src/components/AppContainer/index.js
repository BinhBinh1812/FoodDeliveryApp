import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {getSize, FONTS} from '../../utils/appConstants';

const AppContainer = ({...props}) => {
  const {children} = props || {};
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/nearby.png')}
            resizeMode="contain"
            style={{width: getSize.m(30), height: getSize.m(30)}}
          />
        </TouchableOpacity>

        <View>
          <Text style={{...FONTS.h3}}>locations</Text>
        </View>

        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/shopping-basket.png')}
            resizeMode="contain"
            style={{width: getSize.m(30), height: getSize.m(30)}}
          />
        </TouchableOpacity>
      </View>
      <View>{children}</View>
    </View>
  );
};

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: getSize.m(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: getSize.m(16),
  },
});
