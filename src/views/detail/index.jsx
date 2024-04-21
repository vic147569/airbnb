import { memo } from 'react'

const Detail = memo(() => {
  return (
    <div>
      <div className="header">header</div>
      <h2>Detail</h2>
    </div>
  )
})

Detail.displayName = 'Detail'
export default Detail
