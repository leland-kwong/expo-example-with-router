import { useRouter } from 'expo-router'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default function Explore() {
  const router = useRouter()
  // an inline array of 30 different names
  const names = Array.from(
    { length: 30 },
    (_, i) => `Name ${i + 1}`
  )
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={names}
          renderItem={({ item }) => (
            <TouchableHighlight
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#ddd',
                padding: 10
              }}
              underlayColor="#eee"
              onPress={() => {
                router.push(`/others/${item}`)
              }}
            >
              <Text>{item}</Text>
            </TouchableHighlight>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  )
}
