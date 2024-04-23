import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotRecommendData
} from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk('fetchData', (payload, { dispatch }) => {
  getHomeGoodPriceData().then((res) => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then((res) => {
    dispatch(changeHighScoreInfoAction(res))
  })
  getHomeDiscountData().then((res) => {
    dispatch(changeDiscountInfoAction(res))
  })
  getHomeHotRecommendData().then((res) => {
    dispatch(changeRecommendInfoAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, action) {
      state.goodPriceInfo = action.payload
    },
    changeHighScoreInfoAction(state, action) {
      state.highScoreInfo = action.payload
    },
    changeDiscountInfoAction(state, action) {
      state.discountInfo = action.payload
    },
    changeRecommendInfoAction(state, action) {
      state.recommendInfo = action.payload
    }
  }
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction
} = homeSlice.actions

export default homeSlice.reducer
