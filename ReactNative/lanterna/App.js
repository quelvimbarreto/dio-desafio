import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toogle, setToogle] = useState(false);
  const handleChangeToogle = () => !toogle;

  useEffect(() => {
    Torch.switchState(toogle);
  }, [toogle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      handleChangeToogle();
    });
    return () => subscription.remove();
  });

  return (
    <View style={toogle ? style.containerLight : style.container}>
      <TouchableOpacity
        onPress={() => {
          setToogle(handleChangeToogle);
        }}>
        <Image
          style={toogle ? style.lightingOn : style.lightingOff}
          source={
            toogle
              ? require('./assets/icons/eco-light.png')
              : require('./assets/icons/eco-light-off.png')
          }
        />
        <Image
          style={style.dioLogo}
          source={
            toogle
              ? require('./assets/icons/logo-dio.png')
              : require('./assets/icons/logo-dio-white.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});
