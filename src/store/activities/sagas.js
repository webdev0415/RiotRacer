import { put, call, takeLatest } from "redux-saga/effects"
import { getActivitesSuccAction, getActivitesFailAction } from "./actions"
import { GET_ACTIVITIES_REQ } from "./types"
import { fetchActivitiesApi } from "api/users"

function* getActivitesSaga() {
  try {
    const { data: activities } = yield call(fetchActivitiesApi)
    yield put(getActivitesSuccAction(activities))
  } catch (error) {
    yield put(getActivitesFailAction(error?.response?.data))
  }
}

const activitiesSaga = [takeLatest(GET_ACTIVITIES_REQ, getActivitesSaga)]

export default activitiesSaga
