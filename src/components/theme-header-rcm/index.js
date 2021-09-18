import React, { memo } from 'react'

import { HeaderWrapper } from './style'

export default memo(function ThemeHeaderRcm(props) {

  const { title, keywords = [] } = props

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {
            keywords.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <a className="a" href="todo">{item}</a>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <span className="more">更多</span>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})
