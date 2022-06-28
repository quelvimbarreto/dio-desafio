import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toogle, setToogle] = useState(false);

  const handleChangeToogle = () => setToogle(oldToogle => !oldToogle);

  useEffect(() => {
    Torch.switchState(toogle);
  }, [toogle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToogle(oldToogle => !oldToogle);
    });
    return () => subscription.remove();
  }, []);

  return (
    <View style={toogle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={handleChangeToogle}>
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
    width: 200,
    height: 200,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 200,
    height: 200,
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});
