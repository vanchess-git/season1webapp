import {FlatList} from 'react-native';
import {useMedia} from '../hooks/ApiHooks';
import ListItem from './ListItem';
import PropTypes from 'prop-types';
import {useContext} from 'react';
import {MainContext} from '../contexts/MainContext';

const List = ({navigation}) => {
  const {update} = useContext(MainContext);
  const {mediaArray} = useMedia(update);

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <ListItem singleMedia={item} navigation={navigation} />
      )}
    />
  );
};

List.propTypes = {
  navigation: PropTypes.object,
};

export default List;
