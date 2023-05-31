import { configureStore } from '@reduxjs/toolkit'
// ...
import timeFrame from "./timeFrameSlice";
export default configureStore({
  reducer: {
   timeFrame
  },
})
