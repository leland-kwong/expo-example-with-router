import {
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native'
import { useRouter } from 'expo-router'

const styles = StyleSheet.create({
  backButton: {
    padding: 10
  }
})

export function BackButton() {
  const router = useRouter()
  return (
    <TouchableHighlight
      style={styles.backButton}
      underlayColor="#ccc"
      onPress={() => router.back()}
    >
      <Text>&lt; Back</Text>
    </TouchableHighlight>
  )
}
