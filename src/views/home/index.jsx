import { memo } from 'react'

export const Home = memo(() => {
  return (
    <div>
      <div className="header">header</div>
      <h2>Home</h2>
    </div>
  )
})

Home.displayName = 'Home'
export default Home
