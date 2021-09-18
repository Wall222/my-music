import React, { memo } from 'react'
import { RecLoginWrapper } from './style'

export default memo(function RecLogin() {
  return (
    <RecLoginWrapper className="flex items-center justify-around flex-column sprite_02">
      <div className="desc">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
      <div className="button sprite_02 flex justify-center">用户登录</div>
    </RecLoginWrapper>
  )
})
