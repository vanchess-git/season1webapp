/* eslint-disable camelcase */
import {ScrollView, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/variables';
import {Card, ListItem, Text, Avatar} from '@rneui/themed';
import FullSizeImage from '../components/FullSizeImage';

const Single = ({route}) => {
  console.log('Single route', route);
  const {filename, title, description, user_id, media_type} = route.params;
  return (
    <ScrollView>
      <Card>
        <Card.Title>{title}</Card.Title>
        <Card.Divider />
        {media_type === 'image' ? (
          <FullSizeImage
            source={{uri: mediaUrl + filename}}
            PlaceholderContent={<ActivityIndicator />}
            style={{marginBottom: 12}}
          />
        ) : (
          <video
            source={{uri: mediaUrl + filename}}
            style={{width: '100%', height: '100%'}}
            onError={(error) => {
              console.log('videoerror:', error)
            }}
            useNativeControls
          />
        )}
        <Card.Divider />
        <ListItem>
          <Text>{description}</Text>
        </ListItem>
        <ListItem>
          <Avatar source={{uri: 'https://placekitten.com/160'}} />
          <Text>{user_id}</Text>
        </ListItem>
      </Card>
    </ScrollView>
  );
};

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;
