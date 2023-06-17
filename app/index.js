import { useRouter } from 'expo-router'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default function Index() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => router.push('/main')}
      >
        <Text>Go to main</Text>
      </TouchableHighlight>
      <Text>Index</Text>
    </View>
  )
}
