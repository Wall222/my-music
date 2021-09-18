import React, { memo } from 'react'

import { headerLinks } from "@/common/local-data"
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'


export default memo(function AppHeader() {
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>{item.title}</NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }
  return (
    <HeaderWrapper>
      <div className="content wrap-v1 flex items-center">
        <HeaderLeft className="flex items-center">
          <a href="/" className="logo sprite_01"> </a>
          <div className="selcet-list flex">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="item flex items-center">
                  {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
          <div className="header-hot sprite_01"></div>
        </HeaderLeft>
        <HeaderRight>
            <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined/>}></Input>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
