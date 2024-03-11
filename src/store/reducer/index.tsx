import { combineReducers } from "redux"
import DemoReducer from "./demo.reducer";

export const rootReducer=combineReducers({
      demoform:DemoReducer,
      
})

export type RootState=ReturnType< typeof rootReducer>;