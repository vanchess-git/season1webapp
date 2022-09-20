import {Alert, View} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useState} from "react";
import {Button, Card, Input, Text} from "@rneui/themed";
import {Controller, useForm} from "react-hook-form";
import * as ImagePicker from 'expo-image-picker';
import {useMedia, useTag} from "../hooks/ApiHooks";
import PropTypes from "prop-types";
import {MainContext} from "../contexts/MainContext";
import {applicationTag} from "../utils/variables";

const Upload = ({navigation}) => {
  const [mediafile, setMediafile] = useState(null);
  const [mediatype, setMediatype] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {postMedia} = useMedia();
  const {postTag} = useTag()
  const {update, setUpdate} = useContext(MainContext);

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm({
    defaultValues: {title: '', description: ''},
  });

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let mediaResponse = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(mediaResponse);

    if (!mediaResponse.cancelled) {
      setMediafile(mediaResponse.uri);
      setMediatype(mediaResponse.type);
    }
  };

  const onSubmit = async (data) => {
    console.log('data', data);
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    const filename = mediafile.split('/').pop();
    let extension = filename.split('.').pop();
    extension = extension === 'jpg' ? 'jpeg' : extension;
    formData.append('file', {
      uri: mediafile,
      name: filename,
      type: mediatype + '/' + extension,
    });

    setIsLoading(true);
    console.log('Form data:', formData)
    try {
      const token = await AsyncStorage.getItem('userToken');
      const mediaResponse = await postMedia(token, formData);
      console.log('onSubmit upload', mediaResponse)

      const tag = {file_id: mediaResponse.file_id ,applicationTag};
      const tagResponse = await postTag(token, tag);
      console.log('onSubmit postTag ', tagResponse)
      Alert.alert(mediaResponse.message, '',[
        {
          text: 'OK',
          onPress: () => {
            resetForm();
            setUpdate(!update);
            navigation.navigate('Home');
          },

      }]);
    } catch (error) {
      console.log('submit media failed', error)
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setMediafile(null);
    setMediatype(null);
    setValue('title', '');
    setValue('description', '');

  };

  return (
    <Card>
      <Card.Image source={{uri: mediafile || 'https://placekitten.com/300'}}/>
      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Title"
            autoCapitalize="words"
            errorMessage={
              (errors.title?.type === 'required' && (
                <Text>This is required.</Text>
              )) ||
              (errors.title?.type === 'minLength' && (
                <Text>Min 3 chars!</Text>
              ))
            }
          />
        )}
        name="title"
      />
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Description"
          />
        )}
        name="description"
      />

      <Button title="Select media" onPress={pickImage} />
      <Button title="Reset" onPress={resetForm} />
      <Button title="Upload media"
              loading={isLoading}
              onPress={handleSubmit(onSubmit)}/>
    </Card>
  );
};

Upload.propTypes = {
  navigation: PropTypes.object,
};

export default Upload;
