export const initialState = {
  modalState: {
    isOpen: false,
    type: null,
    step: null,
  },
  authState: {
    loading: true,
    error: undefined,
    user: {},
    isLoggedIn: false,
    isMetaMaskLoggedIn: false,
  },
  coingState: {
    loading: true,
    error: undefined,
    balances: {},
  },
  gargageState: {
    loading: true,
    error: undefined,
    gargages: {},
    property: {},
    currentCar: null,
  },
  activities: {
    loading: true,
    error: undefined,
    entities: [],
  },
  assets: {
    loading: true,
    error: undefined,
    stations: [],
  },
  property: {
    loading: true,
    error: undefined,
    gasBalance: 0,
  },
  cars: {
    cars: [],
    loading: true,
    selectedCar: null,
    internalLoad: false,
  },
}
