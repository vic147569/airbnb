import { memo } from 'react'
import PropTypes from 'prop-types'
import { SectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo(function HomeSectionV1(props) {
  const { infoData } = props
  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms roomList={infoData.list} itemWidth={'25%'} />
      <SectionFooter />
    </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV1
