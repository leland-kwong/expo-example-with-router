import * as React from 'react'
import { SplashScreen, useRouter } from 'expo-router'

export default function App() {
  const [isReady, setReady] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    // Perform some sort of async data or asset fetching.
    setTimeout(() => {
      setReady(true)
      router.push('/main')
    }, 1000)
  }, [])

  return (
    <>
      {/* When all loading is setup, unmount the splash screen component. */}
      {!isReady && <SplashScreen />}
    </>
  )
}
