import { memo } from 'react'

const Entire = memo(() => {
  return (
    <div>
      <div className="header">header</div>
      <h2>Entire</h2>
    </div>
  )
})

Entire.displayName = 'Entire'
export default Entire
