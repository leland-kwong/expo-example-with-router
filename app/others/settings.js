import { View, StyleSheet, Text } from 'react-native'
import { Header } from '../../components/Header'
import { BackButton } from '../../components/BackButton'

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
  return (
    <View style={styles.container}>
      <View style={{ flexGrow: 0 }}>
        <Header
          headerTitle="Settings"
          leftComponent={BackButton}
        />
      </View>
      <View style={styles.main}>
        <Text>Settings</Text>
      </View>
    </View>
  )
}
