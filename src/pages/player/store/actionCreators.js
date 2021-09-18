import { getSongDetail, getLyric } from "@/services/player"
import * as actionTypes from './constants'
import { getRandomNumber } from "@/utils/math-utils"
import { parseLyric } from "@/utils/parse-lyric"

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})

const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
})

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
})

export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence
})

export const changeCurrentSong = (tag) => {
  return (dispatch, getState) => {
    const sequence = getState().getIn(["player", "sequence"])
    const playList = getState().getIn(["player", "playList"])
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"])
    switch(sequence) {
      case 1:
        let randomIndex = getRandomNumber(playList.length)
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList.length)
        }
        currentSongIndex = randomIndex
        break
      default:
        currentSongIndex += tag
        if(currentSongIndex >= playList.length) currentSongIndex = 0
        if(currentSongIndex < 0) currentSongIndex = playList.length - 1
    }
    console.log(currentSongIndex);
    const currentSong = playList[currentSongIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changeCurrentSongIndexAction(currentSongIndex))
  }
}

const changeLyricListAction = (lyricList) => ({
  type: actionTypes.CHANGE_LYRIC,
  lyricList
})

export const getSongDetailAction = (ids) => {
  return async (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"])
    const index = playList.findIndex(item => item.id === ids)
    if (index !== -1) {
      dispatch(changeCurrentSongIndexAction(index))
      dispatch(changeCurrentSongAction(playList[index])) 
    } else {
      const res = await getSongDetail(ids)
      const song = res?.songs[0]
      const newPlayList = [...playList]
      newPlayList.push(song)
      dispatch(changePlayListAction(newPlayList))
      dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
      dispatch(changeCurrentSongAction(song))
      dispatch(getLyricAction(ids))
    }
  }
}

export const getLyricAction = (id) => {
  return async dispatch => {
    const res = await getLyric(id)
    let lyric = res.lrc.lyric
    const lyricList = parseLyric(lyric)
    console.log(lyricList);
    dispatch(changeLyricListAction(lyricList))
  }
}

export const changeCurrentLyricIndex = (currentLyricIndex) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex
})