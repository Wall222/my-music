import { combineReducers } from 'redux-immutable'

import  recommendReducer  from '../pages/discover/c-pages/recommend/store'
import playerReducer from '../pages/player/store'


const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer
})

export default cReducer