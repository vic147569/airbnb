import { memo, useEffect, useState } from 'react'
import HttpRequest from '@/services'

export const Home = memo(() => {
  const [highScore, setHighScore] = useState({})
  useEffect(() => {
    HttpRequest.get({ url: '/home/highscore' }).then((res) => {
      setHighScore(res)
    })
  }, [])

  return (
    <div>
      <h2>{highScore.title}</h2>
      <h4>{highScore.subtitle}</h4>
      <ul>
        {highScore?.list?.map((item) => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
})

Home.displayName = 'Home'
export default Home
