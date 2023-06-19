import { TouchableHighlight } from 'react-native'
import { Image } from 'expo-image'
import { Tabs, useRouter } from 'expo-router'
import { Header } from '../../components/Header'
import { activeButtonColor } from '../../common'

const settingsIcon = require('../../assets/icons/settings-icon.png')
const homeIcon = require('../../assets/icons/home-icon.png')
const homeIconActive = require('../../assets/icons/home-icon-active.png')
const exploreIcon = require('../../assets/icons/explore-icon.png')
const exploreIconActive = require('../../assets/icons/explore-icon-active.png')
const tabsBaseOptions = {
  tabBarLabelStyle: {
    fontSize: 12
  },
  tabBarActiveTintColor: activeButtonColor
}

function makeTabBarIcon(icon, activeIcon) {
  return ({ focused }) => (
    <Image
      source={focused ? activeIcon : icon}
      style={{ width: 24, height: 24 }}
    />
  )
}

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
          ...tabsBaseOptions,
          tabBarIcon: makeTabBarIcon(
            homeIcon,
            homeIconActive
          ),
          title: 'Home'
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          ...tabsBaseOptions,
          tabBarIcon: makeTabBarIcon(
            exploreIcon,
            exploreIconActive
          ),
          title: 'Explore'
        }}
      />
    </Tabs>
  )
}
