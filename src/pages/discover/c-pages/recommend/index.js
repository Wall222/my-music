import React, { memo } from 'react'


import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style'
import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import RecommendRanking from './c-cpns/recommend-ranking'
import RecLogin from './c-cpns/login'
import SettleSinger from './c-cpns/settle-singer'

function Recommend(props) {
  // const { getBanners } = props

  // const dispatch = useDispatch()
  // const { topBanners } = useSelector(state => ({
  //   topBanners: state.getIn(["recommend", "topBanners"])
  // }), shallowEqual)

  // useEffect(() => {
  //   dispatch(getTopBannerAction())
  // }, [dispatch])

  return (
    <RecommendWrapper>
      <TopBanner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend/>
          <NewAlbum/>
          <RecommendRanking/>
        </RecommendLeft>
        <RecommendRight>
          <RecLogin/>
          <SettleSinger/>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}



export default memo(Recommend)

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))