import { all } from "redux-saga/effects"

import auth from "./auth/sagas"
import gargage from "./gargage/sagas"
import properties from "./property/sagas"

import activitiesSaga from "./activities/sagas"
import carsSaga from "./cars/sagas"
import stations from "./stations/sagas"

export default function* rootSaga() {
  const sagas = [
    ...auth,
    ...gargage,
    ...stations,
    ...properties,
    ...activitiesSaga,
    ...carsSaga,
  ]
  yield all(sagas)
}
