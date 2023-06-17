import { Text, TouchableHighlight } from 'react-native'
import { Tabs, useRouter } from 'expo-router'
import { Header } from '../../components/Header'

export default function Main() {
  const router = useRouter()

  return (
    <Tabs
      screenOptions={{
        header(props) {
          const { route } = props

          return (
            <Header
              leftComponent={() => (
                <TouchableHighlight
                  style={{ padding: 10 }}
                  underlayColor="#ccc"
                  onPress={() => {
                    router.push('/others/settings')
                  }}
                >
                  <Text>Settings</Text>
                </TouchableHighlight>
              )}
              centerComponent={() => (
                <Text>{route.name}</Text>
              )}
            />
          )
        }
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="explore" />
    </Tabs>
  )
}
