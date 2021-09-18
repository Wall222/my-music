import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { shallowEqual, useDispatch } from 'react-redux';
import { Slider } from 'antd'
import { NavLink } from 'react-router-dom';
import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils';
import { getSongDetailAction,  changeSequenceAction, changeCurrentSong, changeCurrentLyricIndex } from '../store/actionCreators';
import { message } from 'antd';

import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';
import { useSelector } from 'react-redux';

export default memo(function AppPlayerBar() {

// hooks
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress]= useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getSongDetailAction(448594038))
  //   dispatch(getLyricAction(448594038))
  // }, [dispatch])


  const { 
      currentSong,
      sequence,
      playList,
      lyricList,
      currentLyricIndex
    } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    sequence: state.getIn(["player", "sequence"]),
    playList: state.getIn(["player", "playList"]),
    lyricList: state.getIn(["player", "lyricList"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
  }), shallowEqual)
  const audioRef = useRef()

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
    audioRef.current.play().then(res => {
    setIsPlaying(true)
    }).catch(err => {
    setIsPlaying(false)
    })
  }, [currentSong, lyricList])


// control
const duration = formatDate(currentSong?.dt, "mm:ss")
const showCurrentTime = formatDate(currentTime, "mm:ss")


  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const timeUpdate = (e) => {
    setCurrentTime(e.target.currentTime * 1000)
    if(isChanging === true) return
    setProgress(currentTime/currentSong.dt * 100) 
    let i = 0
    for (; i<lyricList?.length; i++) {
      if(currentTime < lyricList[i].time) {
        break
      } 
    }
    if(i - 1 !== currentLyricIndex) {
      dispatch(changeCurrentLyricIndex(i - 1))
      message.destroy()
      message.open({
        content:lyricList?.[i - 1].content,
        duration: 0
      })
    }
  }

  const loopClick = () => {
    let playListSequence = sequence
    if(sequence === 2) {
      playListSequence = 0
    } else {
      playListSequence += 1
    }
    dispatch(changeSequenceAction(playListSequence))
  }

  const changeMusic = (tag) => {
    dispatch(changeCurrentSong(tag))
  }

// 传进组件的函数用useCallback包裹，防止频繁渲染
  const sliderChange = useCallback(
    (value) => {
      const currentTime = value / 100 * currentSong?.dt
      setCurrentTime(currentTime)
      setIsChanging(true)
      setProgress(value)
    },
    [currentSong]
  )
  const sliderAfterChange = useCallback(
    (value) => {
      console.log(audioRef);
      const currentTime = value / 100 * currentSong?.dt / 1000
      audioRef.current.currentTime = currentTime
      setCurrentTime(currentTime * 1000)
      setIsChanging(false)
      if(!isPlaying) {
        playMusic()
      }
    }, 
    [currentSong, isPlaying, playMusic],
  )

    const handleEnded = useCallback(() => {
      if(sequence === 2) {
        setIsPlaying(false)
        playMusic()
      } else {
       dispatch(changeCurrentSong(1))
      }
    },[playMusic, dispatch, sequence])


  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev" onClick={e => changeMusic(-1)}></button>
          <button className="sprite_player play" onClick={e => playMusic()}></button>
          <button className="sprite_player next" onClick={e => changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(currentSong?.al?.picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong?.name}</span>
              <a href="#/" className="singer-name">{currentSong?.ar?.[0].name}</a>
            </div>
            <div className="progress flex">
              <Slider value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
               />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{duration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player flex" >
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" onClick = { () => loopClick()}></button>
            <button className="sprite_player btn playlist">{playList.length}</button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={handleEnded}></audio>
    </PlaybarWrapper>
  )
})
