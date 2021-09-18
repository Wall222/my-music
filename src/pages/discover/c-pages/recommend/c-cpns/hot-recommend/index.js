import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { HotRecommendWrapper } from './style'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import { getHotRecommendAction } from '../../store/actionCreators'
import SongsCover from '@/components/songs-cover'

export default memo(function HotRecommend() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  }, [dispatch])

  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend","hotRecommends"])
  }), shallowEqual)



  return (
    <HotRecommendWrapper>
      <div>
        <ThemeHeaderRcm title="热门推荐" keywords={["华语","流行","民谣",,"摇滚","电子"]}></ThemeHeaderRcm>
        <div className="recommend-list">
          {
            hotRecommends.map((item, index) => {
              return <SongsCover key={item.id} info={item}></SongsCover>
            })
          }
        </div>
      </div>
    </HotRecommendWrapper>
  )
})
 