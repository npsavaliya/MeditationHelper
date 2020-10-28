
export const getLoadingState = useSelector => useSelector(state => state.loginReducer.loading)
export const getIsLoggedInState = useSelector => useSelector(state => state.loginReducer.isLoggedIn)
export const getId = useSelector => useSelector(state => state.loginReducer.id)