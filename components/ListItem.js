import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import PropTypes from 'prop-types';

const ListItem = (props) => {
  const mediaUrl = 'https://media.mw.metropolia.fi/wbma/uploads/'
  // const thumbnailUrl = mediaUrl + props.singleMedia.filename.split('.')[0] + '-tn160.png';
  console.log(props.singleMedia);
  return (
    <TouchableOpacity
      style={styles.touchOpa}
    >
      <Image
        style={styles.image}
        // source={{uri: thumbnailUrl}}
        source={{uri: mediaUrl + props.singleMedia.thumbnails.w160}}
      />
      <View style={styles.textBox}>
        <Text style={styles.textTitle}>{props.singleMedia.title}</Text>
        <Text style={styles.textMain}>{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    padding: 10,
    width: 150,
    height: 150
  },
  touchOpa: {
    marginTop: 5,
    backgroundColor: '#00ff26',
    flexDirection: 'row',
    padding: 10
  },
  textBox: {
    flexWrap: 'nowrap',
    marginRight: 150,
    marginLeft: 5
  },
  textTitle: {
    textAlign: 'justify',
    color: '#ff8c00'
  },
  textMain: {
    flexWrap: 'wrap',
    color: '#ffff00'
  }
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;

