import { combineReducers } from "redux"
// import { persistReducer } from "redux-persist"
// import storage from "redux-persist/lib/storage"

import activitiesReducer from "./activities/reducer"
import authReducer from "./auth/reducers"
import carsReducer from "./cars/reducer"
import coinReducer from "./coin/reducer"
import gargageReducer from "./gargage/reducer"
import modalReducer from "./modal/reducer"
import propertyReducer from "./property/reducer"
import stationsReducer from "./stations/reducer"

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["modal", "auth", "coin"],
// }

const rootReducer = combineReducers({
  activities: activitiesReducer,
  auth: authReducer,
  cars: carsReducer,
  coin: coinReducer,
  gargage: gargageReducer,
  modal: modalReducer,
  property: propertyReducer,
  stations: stationsReducer,
})

export default rootReducer
// export default persistReducer(persistConfig, rootReducer)
