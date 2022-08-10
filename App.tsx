import React, { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView } from 'react-native';
import Sheet from './components/sheetMusic/Sheet';

const Separator = () => <View style={styles.separator} />;

export default function App() {
  const [currentLevel, setCurrentLevel] = useState<number>(0);

  const levels = [
    {
      lvl: 1,
      notes: [
        '184.161',
        '179.121',
        '171.161',
        '181.161',
        '179.121',
        '184.161',
        '187.161',
        '176.161',
        '184.161',
        '184.161',
        '173.661',
        '168.561',
        '181.161',
        '165.561',
      ],
    },
    {
      lvl: 2,
      notes: [
        '165.561',
        '179.121',
        '187.161',
        '181.161',
        '179.121',
        '184.161',
        '176.161',
        '184.161',
        '184.161',
        '184.161',
        '173.661',
        '171.161',
        '168.561',
        '181.161',
      ],
    },
  ];

  const handleLevel = () => {
    console.log('yo');
    currentLevel === 0 ? setCurrentLevel(1) : setCurrentLevel(0);
  };

  return (
    // <View style={styles.container}>
    //   {/* <Text>Solf'Piano Station</Text> */}
    //   <Sheet />
    //   <Button title="Niveau 1" color="#f194ff" onPress={handleLevel} />
    // </View>
    <SafeAreaView style={styles.container}>
      {/* <View> */}
      <Sheet positions={levels[currentLevel].notes} />
      <Button title={`Niveau ${currentLevel}`} onPress={handleLevel} />
      {/* </View> */}
      <Separator />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '2%',
//     width: '100%',
//     marginTop: '20%',
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
