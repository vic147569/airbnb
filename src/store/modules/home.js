import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotRecommendData,
  getHomeLongForData
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
  getHomeLongForData().then((res) => {
    dispatch(changeLongforInfoAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {}
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
    },
    changeLongforInfoAction(state, action) {
      state.longforInfo = action.payload
    }
  }
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction
} = homeSlice.actions

export default homeSlice.reducer
