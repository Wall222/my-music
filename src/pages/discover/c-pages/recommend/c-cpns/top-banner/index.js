import React, { memo, useCallback, useEffect, useRef, useState } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getTopBannerAction } from '../../store/actionCreators'

import { Carousel } from 'antd'

import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style'

export default memo(function TopBanner() {

  const [currentIndex, setCurrentIndex] = useState(0)
  
  const dispatch = useDispatch()
  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  const carouselRef = useRef()

  const onBeforeChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])
  // 其他业务逻辑
  const bgImage = topBanners[currentIndex]?.imageUrl+"?imageView&blur=40x20"

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay dots ref={carouselRef} beforeChange={onBeforeChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.targetId}>
                    <img className="image" src={item.imageUrl} alt=""/>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left"  onClick={() => carouselRef.current.prev()}></button>
          <button className="btn right"  onClick={() => carouselRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
