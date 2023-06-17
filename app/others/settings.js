import { useRouter } from 'expo-router'
import {
  TouchableHighlight,
  View,
  StyleSheet,
  Text
} from 'react-native'
import { Header } from '../../components/Header'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  main: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backButton: {
    padding: 10
  }
})

export default function Settings() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={{ flexGrow: 0 }}>
        <Header
          leftComponent={() => (
            <TouchableHighlight
              style={styles.backButton}
              underlayColor="#ccc"
              onPress={() => router.back()}
            >
              <Text>&lt; Back</Text>
            </TouchableHighlight>
          )}
          centerComponent={() => (
            <View>
              <Text>Settings</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.main}>
        <Text>Settings</Text>
      </View>
    </View>
  )
}
