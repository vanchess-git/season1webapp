import {StyleSheet, View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import {useContext, useEffect} from 'react';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  // props is needed for navigation
  const [isLoggedIn, setIsLoggedIn] = useContext(MainContext);

  const checkToken = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      console.log('token', userToken);
      // TODO if the content of userToken is 'abc'), set isLoggedIn to true and navigate to Tabs
      if (userToken === 'abc') {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Login - checkToken', error);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const logIn = async () => {
    try {
      console.log('Button pressed', isLoggedIn);
      setIsLoggedIn(true);
      await AsyncStorage.setItem('userToken', 'abc');
    } catch (error) {
      console.error('Login - logIn', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Sign in!" onPress={logIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
