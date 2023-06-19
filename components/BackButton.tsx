import {
  TouchableHighlight,
  Text,
  View,
  StyleSheet
} from 'react-native'
import { useRouter } from 'expo-router'
import { Image } from 'expo-image'

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center'
  }
})

export function BackButton() {
  const router = useRouter()
  return (
    <TouchableHighlight
      underlayColor="#ccc"
      onPress={() => router.back()}
    >
      <View style={styles.backButton}>
        <Image
          source={require('../assets/icons/chevron-left-md.png')}
          style={{ width: 25, height: 25 }}
        />
        <Text>Back</Text>
      </View>
    </TouchableHighlight>
  )
}
