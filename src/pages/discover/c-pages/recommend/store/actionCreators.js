import * as actionTypes from './constants'

import { getTopBanners, getHotRecommends, getNewAlbums, getTopList } from '@/services/recommend'

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result
})

const changeNewAlbumsAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums
})

const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})


export const getTopBannerAction = () => {
  return async dispatch => {
    const res = await getTopBanners()
    dispatch(changeTopBannerAction(res))
  }
}

export const getHotRecommendAction = (limit) => {
  return async dispatch => {
    const res = await getHotRecommends(limit)
    dispatch(changeHotRecommendAction(res))
  }
}

export const getNewAlbumsAction = (limit) => {
  return async dispatch => {
    const res = await getNewAlbums(limit)
    dispatch(changeNewAlbumsAction(res))
  }
}

export const getTopListAction = (idx) => {
  return async dispatch => {
    const res= await getTopList(idx)
    switch (idx) {
      case 3 : 
        dispatch(changeUpRankingAction(res))
        break
      case 0 :
        dispatch(changeNewRankingAction(res))
        break
      case 2 :
        dispatch(changeOriginRankingAction(res))
        break
      default :
      return
    }
  }
}