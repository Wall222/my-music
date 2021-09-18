import React, { memo, useEffect, useRef } from 'react'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import { AlbumWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getNewAlbumsAction } from '../../store/actionCreators'
import AlbumsCover from '@/components/albums-cover'
import { Carousel } from 'antd';

export default memo(function NewAlbum() {

  const dispatch = useDispatch()

  const  { newAlbums }  = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual)


  useEffect(() => {
    dispatch(getNewAlbumsAction(10))
  }, [dispatch])

  const carsouselRef = useRef()


  return (
    <AlbumWrapper>
      <ThemeHeaderRcm title="新碟上架"/>
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick={()=>{carsouselRef.current.prev()}}></button>
        <div className="album">
          <Carousel ref={carsouselRef}>
            {
              [0,1].map(item => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item*5, (item+1) * 5).map(albumsItem => {
                        return <AlbumsCover key={albumsItem.id}
                        info={albumsItem}
                        size={100}
                        width={118}
                        bgp="-570px"></AlbumsCover>
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02" onClick={()=>{carsouselRef.current.next()}}></button>
      </div>
    </AlbumWrapper>
  )
})
