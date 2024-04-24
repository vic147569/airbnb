import { memo } from 'react'
import PropTypes from 'prop-types'
import { FooterWrapper } from './style'
import IconMore from '@/assets/svg/icon_more'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo(function SectionFooter(props) {
  const { name } = props

  let showMessage = 'More'
  if (name) {
    showMessage = `Show ${name}`
  }

  const navigate = useNavigate()
  function moreClickHandle() {
    navigate('/entire')
  }

  return (
    <FooterWrapper color={name ? '#00848a' : '#000'}>
      <div className="info" onClick={moreClickHandle}>
        <span className="text">{showMessage}</span>
        <IconMore />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = { name: PropTypes.string }

export default SectionFooter
