import {MainContext} from "../contexts/MainContext";
import {useContext} from 'react';
import {useLogin, useUser} from "../hooks/ApiHooks";
import {Controller, useForm} from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Button, Text, TextInput, View} from "react-native";

const RegisterForm = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(MainContext);
  // const {postLogin} = useLogin();
  const {postUser} = useUser();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {username: '', email: '', password: '', full_name: ''},
  });

  const register = async (userData) => {
    try {
      const result = await postUser(userData);
      console.log('registration result', result)
      console.log('register userData', userData);
      // const userData = await postLogin(loginCredentials);
      // await AsyncStorage.setItem('userToken', userData.token);
      // setIsLoggedIn(true);
    } catch (error) {
      console.error('register - register', error);
      // TODO: nofify user about wrong username/password/net error?
    }
  };

  return (
    <View>
      <Text>register Form</Text>
      <Controller
        control={control}
        rules={{
          required: false,
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Full name"
          />
        )}
        name="full_name"
      />
      {errors.username?.type === 'required' && <Text>This is required.</Text>}
      {errors.username?.type === 'minLength' && <Text>Min 3 chars!</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          email: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Email"
          />
        )}
        name="email"
      />

      {errors.email?.type === 'required' && <Text>This is required.</Text>}
      {errors.email?.type === 'email' && <Text>Min 3 chars!</Text>}


      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
            placeholder="Password"
          />
        )}
        name="password"
      />
      {errors.password && <Text>This is required.</Text>}

      <Button title="Register!" onPress={handleSubmit((data) => register(data))} />
    </View>
  );
}




export default RegisterForm
