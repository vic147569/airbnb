import { memo } from 'react'

const App = memo(() => {
  return (
    <div>
      <h2>App</h2>
    </div>
  )
})

App.displayName = 'App'
export default App
