import { Image, TouchableHighlight } from 'react-native'
import { Tabs, useRouter } from 'expo-router'
import { Header } from '../../components/Header'

const settingsIcon = require('../../assets/icons/settings-icon.png')

export default function Main() {
  const router = useRouter()

  return (
    <Tabs
      screenOptions={{
        header(props) {
          const { options } = props

          return (
            <Header
              headerTitle={options.title}
              rightComponent={() => (
                <TouchableHighlight
                  style={{ padding: 10 }}
                  underlayColor="#ccc"
                  onPress={() => {
                    router.push('/others/settings')
                  }}
                >
                  <Image
                    source={settingsIcon}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableHighlight>
              )}
            />
          )
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home'
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          unmountOnBlur: true
        }}
      />
    </Tabs>
  )
}
