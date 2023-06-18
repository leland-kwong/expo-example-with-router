import { useSearchParams } from 'expo-router'
import { View, StyleSheet, Text } from 'react-native'
import { BackButton } from '../../components/BackButton'
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
  const params = useSearchParams()

  return (
    <View style={styles.container}>
      <View style={{ flexGrow: 0 }}>
        <Header
          headerTitle={`Explore: ${params.selected}`}
          leftComponent={BackButton}
        />
      </View>
      <View style={styles.main}>
        <Text>Explore</Text>
      </View>
    </View>
  )
}
