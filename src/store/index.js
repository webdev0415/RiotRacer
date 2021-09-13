import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
// import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension"
// import { persistStore } from "redux-persist"
import reducer from "./reducers"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)
// export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export default { store }
