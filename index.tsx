import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Button } from './shared/Button/Button'
import { Colors, FontsSizes, Gaps } from './shared/token'

const { height } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/start-page.png')}
        style={styles.image}
        resizeMode="contain"
      />
      
      <View style={styles.startBlock}>
        <View style={styles.textBlock}>
          <Text style={styles.headline}>Одно из самых вкусных кофе в городе!</Text>
          <Text style={styles.text}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
        </View>
        <Button text="Начать" />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  image: {
    height: height * 0.67,
    width: '100%',
  },
  startBlock: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.black,
    paddingHorizontal: 30,
    paddingBottom: 43,
    paddingTop: 24,
    gap: Gaps.g24,
  },
  textBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: Gaps.g8,
  },
  headline: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: FontsSizes.fs34,
    fontWeight: '600',
    letterSpacing: 0.5,
    lineHeight: 34,
  },
  text: {
    textAlign: 'center',
    color: Colors.gray,
    fontSize: FontsSizes.fs14,
    fontWeight: '400',
    lineHeight: 20,
  },
});