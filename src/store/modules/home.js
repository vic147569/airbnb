import { getHomeGoodPriceData, getHomeHighScoreData } from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk('fetchData', (payload, { dispatch }) => {
  getHomeGoodPriceData().then((res) => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then((res) => {
    dispatch(changeHighScoreInfoAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, action) {
      state.goodPriceInfo = action.payload
    },
    changeHighScoreInfoAction(state, action) {
      state.highScoreInfo = action.payload
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, action) => {
  //     console.log(action.payload)
  //     state.goodPriceInfo = action.payload
  //   })
  // }
})

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction } = homeSlice.actions
export default homeSlice.reducer
