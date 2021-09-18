import React, { memo } from 'react'
import { SettleSingerWrapper } from './style'

export default memo(function SettleSinger() {
  return (
    <SettleSingerWrapper>
      <div className="header flex justify-between">
        <span className="header-left">入驻歌手</span>
        <span className="header-right">查看全部</span>
      </div>
    </SettleSingerWrapper>
  )
})
