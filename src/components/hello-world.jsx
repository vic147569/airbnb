import { memo } from 'react'

const HelloWorld = memo(() => {
  return (
    <div>
      <h2>App</h2>
    </div>
  )
})

HelloWorld.displayName = 'HelloWorld'

export default HelloWorld
