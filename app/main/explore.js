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

function useListData() {
  // an inline array of 30 different names
  const names = Array.from(
    { length: 30 },
    (_, i) => `Item ${i + 1}`
  )

  return names
}

export default function Explore() {
  const router = useRouter()
  const data = useListData()

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={data}
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
