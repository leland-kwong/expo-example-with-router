import { StyleSheet, Text, View } from 'react-native'
import { ReactElement } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#eee',
    alignItems: 'center'
  },
  headerLeft: {
    width: 100,
    minHeight: 5
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center'
  },
  headerRight: {
    width: 100,
    minHeight: 5
  }
})

export function Header({
  leftComponent = () => null,
  centerComponent = () => null,
  rightComponent = () => null,
  headerTitle
}: {
  leftComponent?: () => ReactElement | null
  centerComponent?: () => ReactElement | null
  rightComponent?: () => ReactElement | null
  headerTitle?: string
}) {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={{
        ...styles.header,
        height: styles.header.height + insets.top,
        paddingTop: insets.top
      }}
    >
      <View style={styles.headerLeft}>
        {leftComponent()}
      </View>
      <View style={styles.headerCenter}>
        {headerTitle !== undefined ? (
          <Text
            style={{ fontSize: 16, fontWeight: 'bold' }}
          >
            {headerTitle}
          </Text>
        ) : (
          centerComponent()
        )}
      </View>
      <View style={styles.headerRight}>
        {rightComponent()}
      </View>
    </View>
  )
}
