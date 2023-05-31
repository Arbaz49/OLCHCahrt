import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from './store';

// Define a type for the slice state
interface timeFrameState {
    timeFrame: string
}

// Define the initial state using that type
const initialState: timeFrameState = {
  timeFrame: "1m",
}

export const timeFrameSlice = createSlice({
  name: 'timeFrame',
  initialState,
  reducers: {
    changeTimeFrame: (state,action:PayloadAction<string>) => {
      state.timeFrame = action.payload;
    }
  },
})

export const { changeTimeFrame } = timeFrameSlice.actions

// export const selectCount = (state: RootState) => state.counter.value

export default timeFrameSlice.reducer