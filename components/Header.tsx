import { StyleSheet, View } from 'react-native'
import { ReactElement } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center'
  },
  headerLeft: {
    width: 100,
    minHeight: 5
    // backgroundColor: 'lightblue'
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center'
    // backgroundColor: 'pink'
  },
  headerRight: {
    width: 100,
    minHeight: 5
    // backgroundColor: 'lightblue'
  }
})

export function Header({
  leftComponent = () => null,
  centerComponent = () => null,
  rightComponent = () => null
}: {
  leftComponent?: () => ReactElement | null
  centerComponent?: () => ReactElement | null
  rightComponent?: () => ReactElement | null
}) {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={{
        ...styles.header,
        paddingTop: insets.top
      }}
    >
      <View style={styles.headerLeft}>
        {leftComponent()}
      </View>
      <View style={styles.headerCenter}>
        {centerComponent()}
      </View>
      <View style={styles.headerRight}>
        {rightComponent()}
      </View>
    </View>
  )
}
