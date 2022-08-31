import {StatusBar} from 'expo-status-bar';
import Navigator from './navigators/Navigator';

const App = () => {
  return (
    <>
      <Navigator></Navigator>
      <StatusBar style="auto" />
    </>
  );
};

export default App;

/**button basics*/
// import React, { Component } from 'react';
// import { Button, StyleSheet, View } from 'react-native';
//
// export default class ButtonBasics extends Component {
//   _onPressButton() {
//     alert('You tapped the button!')
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//             color="#841584"
//           />
//         </View>
//         <View style={styles.alternativeLayoutButtonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="This looks great!"
//           />
//           <Button
//             onPress={this._onPressButton}
//             title="OK!"
//             color="#841584"
//           />
//         </View>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     margin: 20
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   }
// });
/**list basics*/
// import React from 'react';
// import { FlatList, StyleSheet, Text, View } from 'react-native';
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });
//
// const FlatListBasics = () => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={[
//           {key: 'Devin'},
//           {key: 'Dan'},
//           {key: 'Dominic'},
//           {key: 'Jackson'},
//           {key: 'James'},
//           {key: 'Joel'},
//           {key: 'John'},
//           {key: 'Jillian'},
//           {key: 'Jimmy'},
//           {key: 'Julie'},
//         ]}
//         renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//       />
//     </View>
//   );
// }
//
// export default FlatListBasics;

/**mega advanced list*/
// import React from 'react';
// import { SectionList, StyleSheet, Text, View } from 'react-native';
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })
//
// const SectionListBasics = () => {
//   return (
//     <View style={styles.container}>
//       <SectionList
//         sections={[
//           {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
//           {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//         ]}
//         renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//         renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//         keyExtractor={(item, index) => `basicListEntry-${item.title}`}
//       />
//     </View>
//   );
// }
//
// export default SectionListBasics;

//width: Dimensions.get('window').width / 2.2
